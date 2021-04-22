import fs from 'fs'
import path from 'path'
import util from 'util'

import { CheckAnnotation } from '../checks-common'
import { CargoBuildFinishedMessage, CargoCompilerMessage, CargoMessage } from './cargo-types'

const readdir = util.promisify(fs.readdir)
const utimes = util.promisify(fs.utimes)

export function getCompilerAnnotations(item: CargoCompilerMessage): CheckAnnotation[] {
  const annotations: CheckAnnotation[] = []
  const message = item.message

  const relPath = item.target && item.target.src_path ? item.target.src_path.match(/^\/app\/(.+)$/) : null

  const span = message.spans && message.spans[0] ? message.spans[0] : null

  annotations.push({
    path: relPath && relPath[1] ? relPath[1] : 'Cargo.toml',
    start_line: span ? span.line_start : 0,
    end_line: span ? span.line_end : 0,
    annotation_level: 'failure',
    message: message.message,
    raw_details: JSON.stringify(message, null, '    ')
  })

  return annotations
}

export function cargoHasBuildFinished(output: CargoMessage[]): boolean {
  // If the `build-finished` message has `success: false` it implies
  // there is syntax errors in the code. In that case running clippy,
  // tests, rustfmt is needless, as they'll fail with the same syntax
  // errors.
  const buildFinished = output.find(msg => msg.reason == 'build-finished') as CargoBuildFinishedMessage | undefined

  // If the `build-finished` message is not found in `output`, then
  // assume it passed, and run the other checks regardless. Worst case
  // the other checks fail.
  const buildSuccess = buildFinished?.success ?? true

  return buildSuccess
}

// Clippy shares the same build cache as Cargo,
// so if `cargo clippy` is executed after `cargo clippy`
// or if `cargo clippy` is simply executed twice,
// without the build cache having been invalidated.
// Then Clippy will either emit the output of the last
// invocation or none at all.
//
// The easiest way to invalidate the cache, is simply
// to touch all `.rs` files in the project. Executing
// `cargo clean` would also work, but then the next check
// will need to download all the dependencies again.
//
// Issue: https://github.com/rust-lang/rust-clippy/issues/4612
export async function touchRustFiles(path = '.'): Promise<void> {
  return walk(
    path,
    async (filePath, fileName) => {
      if (fileName.endsWith('.rs')) {
        await touchExistingFile(filePath)
      }
    },
    (_dirPath, dirName) => {
      return dirName != '.git' && dirName != 'target'
    }
  )
}

async function touchExistingFile(path: string): Promise<void> {
  const time = new Date()
  return utimes(path, time, time)
}

async function walk(
  dir: string,
  visitPath: (path: string, name: string) => Promise<void>,
  visitDir: (path: string, name: string) => boolean
): Promise<void> {
  const files = await readdir(dir)
  for (const name of files) {
    const abspath = path.join(dir, name)
    const isDir = fs.statSync(abspath).isDirectory()
    if (isDir) {
      if (visitDir(abspath, name)) {
        await walk(abspath, visitPath, visitDir)
      }
    } else {
      await visitPath(abspath, name)
    }
  }
}

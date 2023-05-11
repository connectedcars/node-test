# Debugging runner

launch.json
``` json5
 {
      "name": "jest-runner",
      "type": "node",
      "runtimeArgs": [
        "./node_modules/.bin/jest",
        //"--verbose",
        //"--useStderr",
        //"--no-watchman",
        //"--no-cache",
        // "--runInBand",
        "--projects",
        "src/runner/__fixtures__"
      ],
      "console": "integratedTerminal",
      "request": "launch",
      "cwd": "${workspaceRoot}",
      "preLaunchTask": "npm: build:js",
      "outFiles": [
        "${workspaceRoot}/build/dist/**/**.js"
      ],
      "sourceMaps": true,
      "args": [],
      "env": {},
      "internalConsoleOptions": "openOnSessionStart"
    }
```

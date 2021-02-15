export class EnvStub {
  private oldEnv: { [key: string]: string | undefined } = {}
  public constructor(keys: string[]) {
    for (const key of keys) {
      this.oldEnv[key] = process.env[key]
      delete process.env[key]
    }
  }

  public restore(): void {
    for (const key in this.oldEnv) {
      process.env[key] = this.oldEnv[key]
    }
  }
}

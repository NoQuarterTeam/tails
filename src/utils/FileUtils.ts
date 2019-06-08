import fs from "fs"
import path from "path"
import mkdirp from "mkdirp"

export class FileUtils {
  /**
   * Creates directories recursively.
   */
  static createDirectories(directory: string) {
    return new Promise((ok, fail) =>
      mkdirp(directory, (err: any) => (err ? fail(err) : ok())),
    )
  }

  /**
   * Creates a file with the given content in the given path.
   */
  static async createFile(
    filePath: string,
    content: string,
    override: boolean = true,
  ): Promise<void> {
    await this.createDirectories(path.dirname(filePath))
    return new Promise<void>((ok, fail) => {
      if (override === false && fs.existsSync(filePath)) return ok()

      fs.writeFile(filePath, content, err => (err ? fail(err) : ok()))
    })
  }

  /**
   * Reads everything from a given file and returns its content as a string.
   */
  static async readFile(filePath: string): Promise<string> {
    return new Promise<string>((ok, fail) => {
      fs.readFile(filePath, (err, data) =>
        err ? fail(err) : ok(data.toString()),
      )
    })
  }

  static async fileExists(filePath: string) {
    return fs.existsSync(filePath)
  }
}

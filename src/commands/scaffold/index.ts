import { Command, flags } from "@oclif/command"
import * as inquirer from "inquirer"
import { sleep, capitalize } from "@noquarter/utils"
import Listr from "listr"

import { EntityTemplate } from "../../templates/entity"
import { FileUtils } from "../../utils/FileUtils"
import { ResolverTemplate } from "../../templates/resolver"
import { ServiceTemplate } from "../../templates/service"
import { RepositoryTemplate } from "../../templates/repository"
import { CreateInputTemplate } from "../../templates/input/createInput"
import { UpdateInputTemplate } from "../../templates/input/updateInput"

export default class Scaffold extends Command {
  static description = "Generates TypeGraphQL + TypeOrm backend code"

  static examples = [`$ tails scaffold`]

  static strict = false

  static flags = {
    help: flags.help({ char: "h" }),
  }

  static args = []

  async run() {
    const { resource }: { resource: string } = await inquirer.prompt([
      {
        type: "input",
        name: "resource",
        message: "Name of the resource",
        default: "user",
      },
    ])

    const { fields }: { fields: string } = await inquirer.prompt([
      {
        type: "input",
        name: "fields",
        message:
          "Fields to be created along with their type: firstName:string count:number (optional)",
      },
    ])

    const tasks = new Listr([
      {
        title: `Created ${resource} entity`,
        task: () => this.createEntity(resource, fields),
      },
      {
        title: `Created ${resource} resolver`,
        task: () => this.createResolver(resource),
      },
      {
        title: `Created ${resource} inputs`,
        task: () =>
          new Listr([
            {
              title: `Create${capitalize(resource)}Input`,
              task: () => this.createCreateInput(resource, fields),
            },
            {
              title: `Update${capitalize(resource)}Input`,
              task: () => this.createUpdateInput(resource, fields),
            },
          ]),
      },
      {
        title: `Created ${resource} service`,
        task: () => this.createService(resource),
      },
      {
        title: `Created ${resource} repository`,
        task: () => this.createRepository(resource),
      },
    ])
    tasks.run()
  }

  async createEntity(resource: string, fields?: string) {
    await sleep(100)
    const fileName = `${resource}.entity.ts`
    const filePath = process.cwd() + "/src/modules/" + resource + "/" + fileName
    const content = EntityTemplate(resource, fields)
    FileUtils.createFile(filePath, content)
  }

  async createResolver(resource: string) {
    await sleep(100)
    const fileName = `${resource}.resolver.ts`
    const filePath = process.cwd() + "/src/modules/" + resource + "/" + fileName
    const content = ResolverTemplate(resource)
    FileUtils.createFile(filePath, content)
  }

  async createCreateInput(resource: string, fields?: string) {
    await sleep(100)
    const createFileName = `create${capitalize(resource)}.input.ts`
    const createFilePath =
      process.cwd() + "/src/modules/" + resource + "/input/" + createFileName
    const createContent = CreateInputTemplate(resource, fields)
    FileUtils.createFile(createFilePath, createContent)
  }

  async createUpdateInput(resource: string, fields?: string) {
    await sleep(100)
    const updateFileName = `update${capitalize(resource)}.input.ts`
    const updateFilePath =
      process.cwd() + "/src/modules/" + resource + "/input/" + updateFileName
    const updateContent = UpdateInputTemplate(resource, fields)
    FileUtils.createFile(updateFilePath, updateContent)
  }

  async createService(resource: string) {
    await sleep(100)
    const fileName = `${resource}.service.ts`
    const filePath = process.cwd() + "/src/modules/" + resource + "/" + fileName
    const content = ServiceTemplate(resource)
    FileUtils.createFile(filePath, content)
  }

  async createRepository(resource: string) {
    await sleep(100)
    const fileName = `${resource}.repository.ts`
    const filePath = process.cwd() + "/src/modules/" + resource + "/" + fileName
    const content = RepositoryTemplate(resource)
    FileUtils.createFile(filePath, content)
  }
}

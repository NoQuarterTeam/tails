import { capitalize } from "@noquarter/utils"

export const ServiceTemplate = (name: string) => {
  const capitalName = capitalize(name)
  return `import { Service } from "typedi"

import { ${capitalName} } from "./${name}.entity"
import { Create${capitalName}Input } from "./inputs/create${capitalName}.input"
import { Update${capitalName}Input } from "./inputs/update${capitalName}.input"
import { ${capitalName}Repository } from "./${name}.repository"

@Service()
export class ${capitalName}Service {
  constructor(private readonly ${name}Repository: ${capitalName}Repository) {}

  create(data: Create${capitalName}Input): Promise<${capitalName}> {
    return new Promise(async (resolve, reject) => {
      try {
        const ${name} = await ${capitalName}.create(data).save()
        resolve(${name})
      } catch (error) {
        reject(error)
      }
    })
  }

  update(${name}Id: string, data: Update${capitalName}Input): Promise<${capitalName}> {
    return new Promise(async (resolve, reject) => {
      try {
        const ${name} = await this.${name}Repository.findById(${name}Id)
        Object.assign(${name}, data)
        await ${name}.save()
        resolve(${name})
      } catch (error) {
        reject(error)
      }
    })
  }

  destroy(${name}Id: string): Promise<${capitalName}> {
    return new Promise(async (resolve, reject) => {
      try {
        const ${name} = await this.${name}Repository.findById(${name}Id)
        await ${name}.remove()
        resolve(${name})
      } catch (error) {
        reject(error)
      }
    })
  }
}
`
}

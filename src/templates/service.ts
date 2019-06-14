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

  async create(data: Create${capitalName}Input): Promise<${capitalName}> {
    const ${name} = await ${capitalName}.create(data).save()
    return ${name}
  }

  async update(${name}Id: string, data: Update${capitalName}Input): Promise<${capitalName}> {
    const ${name} = await this.${name}Repository.findById(${name}Id)
    Object.assign(${name}, data)
    await ${name}.save()
    return ${name}
  }

  async destroy(${name}Id: string): Promise<boolean> {
    const ${name} = await this.${name}Repository.findById(${name}Id)
    await ${name}.remove()
    return true
  }
}
`
}

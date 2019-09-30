import { capitalize } from "@noquarter/utils"

export const ServiceTemplate = (name: string) => {
  const capitalName = capitalize(name)
  return `import { Service } from "typedi"

import { ${capitalName} } from "./${name}.entity"
import { ${capitalName}Repository } from "./${name}.repository"

@Service()
export class ${capitalName}Service {
  constructor(private readonly ${name}Repository: ${capitalName}Repository) {}

  async create(data: Partial<${capitalName}>): Promise<${capitalName}> {
    const ${name} = await ${capitalName}.create(data).save()
    return ${name}
  }

  async update(${name}Id: string, data: Partial<${capitalName}>): Promise<${capitalName}> {
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

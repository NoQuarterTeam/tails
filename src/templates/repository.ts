import { capitalize } from "@noquarter/utils"

export const RepositoryTemplate = (name: string) => {
  const capitalName = capitalize(name)
  return `import { Service } from "typedi"
import { ${capitalName} } from "./${name}.entity"

@Service()
export class ${capitalName}Repository {
  findById(${name}Id: string): Promise<${capitalName}> {
    return ${capitalName}.findOneOrFail(${name}Id)
  }

  findAll(): Promise<${capitalName}[]> {
    return ${capitalName}.find()
  }
}
`
}

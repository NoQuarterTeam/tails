import { capitalize } from "@noquarter/utils"
import pluralize from "pluralize"

export const ResolverTemplate = (name: string) => {
  const capitalName = capitalize(name)
  const pluralName = pluralize(name)
  const pluralCapitalName = pluralize(capitalName)
  return `import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { User } from "./user.entity"

import { ${capitalName}Service } from "./${name}.service"
import { ${capitalName}Repository } from "./${name}.repository"

@Resolver(() => ${capitalName})
export class ${capitalName}Resolver {
  constructor(
    private readonly ${name}Service: ${capitalName}Service,
    private readonly ${name}Repository: ${capitalName}Repository
  ) {}

  @Query(() => [${capitalName}])
  async get${pluralCapitalName}(): Promise<${capitalName}[]> {
    const ${pluralName} = await this.${name}Repository.findAll()
    return ${pluralName}
  }

  @Mutation(() => ${capitalName})
  async create${capitalName}(@Arg("data") data: Create${capitalName}Input): Promise<${capitalName}> {
    const ${name} = await this.${name}Service.create(data)
    return ${name}
  }

  @Mutation(() => ${capitalName})
  async update${capitalName}(
    @Arg("${name}Id") ${name}Id: string,
    @Arg("data") data: Update${capitalName}Input,
  ): Promise<${capitalName}> {
    const ${name} = await this.${name}Service.update(${name}Id, data)
    return ${name}
  }

  @Mutation(() => ${capitalName})
  async destroy${capitalName}(@Arg("${name}Id") ${name}Id: string): Promise<${capitalName}> {
    const ${name} = await this.${name}Service.destroy(${name}Id)
    return ${name}
  }

}
`
}

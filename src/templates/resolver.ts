import { capitalize } from "@noquarter/utils"
import pluralize from "pluralize"

export const ResolverTemplate = (name: string) => {
  const capitalName = capitalize(name)
  const pluralName = pluralize(name)
  const pluralCapitalName = pluralize(capitalName)
  return `import { Resolver, Query, Mutation, Arg } from "type-graphql"
  
import { ${capitalName} } from "./${name}.entity"
import { Create${capitalName}Input } from "./input/create${capitalName}.input"
import { Update${capitalName}Input } from "./input/update${capitalName}.input"
import { ${capitalName}Service } from "./${name}.service"
import { ${capitalName}Repository } from "./${name}.repository"

@Resolver(() => ${capitalName})
export class ${capitalName}Resolver {
  constructor(
    private readonly ${name}Service: ${capitalName}Service,
    private readonly ${name}Repository: ${capitalName}Repository
  ) {}

  @Query(() => [${capitalName}])
  get${pluralCapitalName}(): Promise<${capitalName}[]> {
    return this.${name}Repository.findAll()
  }

  @Mutation(() => ${capitalName})
  create${capitalName}(@Arg("data") data: Create${capitalName}Input): Promise<${capitalName}> {
    return this.${name}Service.create(data)
  }

  @Mutation(() => ${capitalName})
  update${capitalName}(
    @Arg("${name}Id") ${name}Id: string,
    @Arg("data") data: Update${capitalName}Input,
  ): Promise<${capitalName}> {
    return this.${name}Service.update(${name}Id, data)
  }

  @Mutation(() => Boolean)
  destroy${capitalName}(@Arg("${name}Id") ${name}Id: string): Promise<boolean> {
    return this.${name}Service.destroy(${name}Id)
  }

}
`
}

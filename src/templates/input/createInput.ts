import { capitalize } from "@noquarter/utils"

export const CreateInputTemplate = (name: string, fields?: string) => {
  const capitalName = capitalize(name)
  const fieldsArray =
    fields &&
    fields
      .split(" ")
      .map(field => field.split(":"))
      .map(f => ({ name: f[0], type: f[1] }))

  return `import { InputType, Field } from "type-graphql"
	
import { ${capitalName} } from "../${name}.entity"

@InputType()
export class Create${capitalName}Input implements Partial<${capitalName}> {
  ${fieldsArray &&
    fieldsArray
      .map(field => {
        return `@Field()
  ${field.name}: ${field.type}
  
  `
      })
      .join("")}
}	
`
}

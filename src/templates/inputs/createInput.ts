import { capitalize } from "@noquarter/utils"

export const CreateInputTemplate = (name: string) => {
  const capitalName = capitalize(name)

  return `import { InputType, Field } from "type-graphql"
	
import { ${capitalName} } from "../${name}.entity"

@InputType()
export class Create${capitalName}Input implements Partial<${capitalName}> {

}	
`
}

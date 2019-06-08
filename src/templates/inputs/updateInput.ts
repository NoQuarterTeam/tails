import { capitalize } from "@noquarter/utils"

export const UpdateInputTemplate = (name: string) => {
  const capitalName = capitalize(name)

  return `import { InputType, Field } from "type-graphql"
	
import { ${capitalName} } from "../${name}.entity"

@InputType()
export class Update${capitalName}Input implements Partial<${capitalName}> {

}	
`
}

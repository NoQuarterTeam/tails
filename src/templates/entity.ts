import { capitalize } from "@noquarter/utils"

export const EntityTemplate = (name: string, fields?: string) => {
  const fieldsArray =
    fields &&
    fields
      .split(" ")
      .map(field => field.split(":"))
      .map(f => ({ name: f[0], type: f[1] }))

  return `import { Entity, Column, BaseEntity } from "typeorm"
import { ObjectType, Field } from "type-graphql"

@ObjectType()
@Entity()
export class ${capitalize(name)} extends BaseEntity {
  ${fieldsArray &&
    fieldsArray
      .map(field => {
        return `@Field()
  @Column()
  ${field.name}: ${field.type}
  
  `
      })
      .join("")}
}`
}

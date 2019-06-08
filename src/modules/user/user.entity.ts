import { Entity, @Column, BaseEntity } from "typeorm"
import { ObjectType, Field } from "type-graphql"

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @Column()
  firstName: string
  
  
}
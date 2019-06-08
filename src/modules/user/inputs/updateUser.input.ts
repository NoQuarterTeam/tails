import { InputType, Field } from "type-graphql"
	
import { User } from "../user.entity"

@InputType()
export class CreateUserInput implements Partial<User> {

}	

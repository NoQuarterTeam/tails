import { Service } from "typedi"
import { User } from "./user.entity"

@Service()
export class UserRepository {
  findById(userId: string): Promise<User> {
    return User.findOneOrFail(userId)
  }

  findAll(): Promise<User[]> {
    return User.find()
  }
}

import { Service } from "typedi"

import { User } from "./user.entity"
import { CreateUserInput } from "./inputs/createUser.input"
import { UpdateUserInput } from "./inputs/updateUser.input"
import { UserRepository } from "./user.repository"

@Service()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(data: CreateUserInput): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await User.create(data).save()
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }

  update(userId: string, data: UpdateUserInput): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.userRepository.findById(userId)
        Object.assign(user, data)
        await user.save()
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }

  destroy(userId: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        const user = await this.userRepository.findById(userId)
        await user.remove()
        resolve(user)
      } catch (error) {
        reject(error)
      }
    })
  }
}

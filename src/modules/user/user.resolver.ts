import { Resolver, Query, Mutation, Arg } from "type-graphql"
import { User } from "./user.entity"

import { UserService } from "./user.service"
import { UserRepository } from "./user.repository"

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UserRepository
  ) {}

  @Query(() => [User])
  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    return users
  }

  @Mutation(() => User)
  async createUser(@Arg("data") data: CreateUserInput): Promise<User> {
    const user = await this.userService.create(data)
    return user
  }

  @Mutation(() => User)
  async updateUser(
    @Arg("userId") userId: string,
    @Arg("data") data: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userService.update(userId, data)
    return user
  }

  @Mutation(() => User)
  async destroyUser(@Arg("userId") userId: string): Promise<User> {
    const user = await this.userService.destroy(userId)
    return user
  }

}

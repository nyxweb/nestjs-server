import { Resolver, Args, Mutation } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { createUserDto } from './dto/create-user.dto'

import { MEMB_INFO } from 'models/MEMB_INFO'

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => MEMB_INFO)
  async createUser(@Args() data: createUserDto) {
    return await this.usersService.createUser(data)
  }
}

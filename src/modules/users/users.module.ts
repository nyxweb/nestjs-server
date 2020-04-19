import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

// Models
import { MEMB_INFO } from 'src/models/MEMB_INFO';

@Module({
  imports: [SequelizeModule.forFeature([MEMB_INFO])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}

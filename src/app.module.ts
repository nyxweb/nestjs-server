import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { GraphQLModule } from '@nestjs/graphql'

import { db } from 'config/database'
import { UsersModule } from 'modules/users/users.module'
import { CharactersModule } from 'modules/characters/characters.module'
import { GuildsModule } from 'modules/guilds/guilds.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.gql']
    }),
    SequelizeModule.forRoot(db),
    UsersModule,
    CharactersModule,
    GuildsModule
  ]
})
export class AppModule {}

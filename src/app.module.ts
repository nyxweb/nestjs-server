import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';

// Config
import { db } from './config/database';

// Modules
import { UsersModule } from './modules/users/users.module';
import { CharactersModule } from './modules/characters/characters.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      typePaths: ['./**/*.gql'],
    }),
    SequelizeModule.forRoot(db),
    UsersModule,
    CharactersModule,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'

import { CharactersResolver } from './characters.resolver'
import { CharactersService } from './characters.service'
import { Character } from 'models/Character'
import { MEMB_STAT } from 'models/MEMB_STAT'
import { Guild } from 'models/Guild'
import { GuildMember } from 'models/GuildMember'

@Module({
  imports: [
    SequelizeModule.forFeature([Character, MEMB_STAT, Guild, GuildMember])
  ],
  providers: [CharactersResolver, CharactersService]
})
export class CharactersModule {}

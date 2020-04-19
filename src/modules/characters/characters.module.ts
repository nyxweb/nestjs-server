import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CharactersResolver } from './characters.resolver';
import { CharactersService } from './characters.service';

// Models
import { Character } from 'src/models/Character';
import { MEMB_STAT } from 'src/models/MEMB_STAT';
import { Guild } from 'src/models/Guild';
import { GuildMember } from 'src/models/GuildMember';

@Module({
  imports: [
    SequelizeModule.forFeature([Character, MEMB_STAT, Guild, GuildMember]),
  ],
  providers: [CharactersResolver, CharactersService],
})
export class CharactersModule {}

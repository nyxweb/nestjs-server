import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { GuildsResolver } from './guilds.resolver';
import { GuildsService } from './guilds.service';
import { Guild } from 'models/Guild';
import { GuildMember } from 'models/GuildMember';

@Module({
  imports: [SequelizeModule.forFeature([Guild, GuildMember])],
  providers: [GuildsResolver, GuildsService],
})
export class GuildsModule {}

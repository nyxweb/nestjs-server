import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { getGuildsDto } from './dto/get-guilds.dto';
import { Guild } from 'models/Guild';
import { GuildMember } from 'models/GuildMember';

@Injectable()
export class GuildsService {
  constructor(
    @InjectModel(Guild)
    private guildModel: typeof Guild,
    @InjectModel(GuildMember)
    private guildMemberModel: typeof GuildMember,
  ) {}

  async findOne(name: string): Promise<Guild | null> {
    const guild = await this.guildModel.findOne({
      where: { G_Name: name },
      include: [
        {
          model: GuildMember,
        },
      ],
    });

    return guild;
  }

  async findMany({ page = 1, perPage = 20 }: getGuildsDto): Promise<Array<Guild>> {
    const guilds = await this.guildModel.findAll({
      limit: perPage,
      offset: (page - 1) * perPage,
      order: [
        ['G_Score', 'DESC'],
        ['G_Name', 'ASC'],
      ],
      include: [
        {
          model: this.guildMemberModel,
        },
      ],
    });

    return guilds;
  }
}

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { QueryTypes } from 'sequelize'

import { getGuildsDto } from './dto/get-guilds.dto'
import { Guild } from 'models/Guild'
import { GuildMember } from 'models/GuildMember'

@Injectable()
export class GuildsService {
  constructor(
    @InjectModel(Guild)
    private guildModel: typeof Guild // @InjectModel(GuildMember) // private guildMemberModel: typeof GuildMember
  ) {}

  async findOne(name: string): Promise<Guild | null> {
    const guild = await this.guildModel.findOne({
      where: { G_Name: name },
      include: [
        {
          model: GuildMember
        }
      ]
    })

    return guild
  }

  async findMany({
    page = 1,
    perPage = 20
  }: getGuildsDto): Promise<{ count: number; rows: Array<Guild> }> {
    const guilds = await this.guildModel.sequelize!.query<Guild>(
      `SELECT
        G_Name, G_Mark, G_Score, G_Master,
        (SELECT SUM(Resets) FROM Character
        LEFT JOIN GuildMember ON Character.Name = GuildMember.Name
        WHERE GuildMember.G_Name = Guild.G_Name) AS TotalResets,
        (SELECT COUNT(*) FROM Character
        LEFT JOIN GuildMember ON Character.Name = GuildMember.Name
        WHERE GuildMember.G_Name = Guild.G_Name) AS TotalMembers
      FROM
        Guild
      ORDER BY
        TotalResets DESC
      OFFSET ${(page - 1) * perPage} ROWS
      FETCH NEXT ${perPage} ROWS ONLY`,
      { type: QueryTypes.SELECT }
    )

    const guildsCount = await this.guildModel.count()

    return {
      count: guildsCount,
      rows: guilds
    }
  }
}

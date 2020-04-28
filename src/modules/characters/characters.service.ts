import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

import { getCharactersDto } from './dto/get-characters.dto';
import { Character } from 'models/Character';
import { MEMB_STAT } from 'models/MEMB_STAT';
import { Guild } from 'models/Guild';
import { GuildMember } from 'models/GuildMember';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character)
    private characterModel: typeof Character,
  ) {}

  async findOne(Name: string): Promise<Character | null> {
    const character = await this.characterModel.findOne({
      where: { Name },
      include: [
        {
          model: MEMB_STAT,
        },
        {
          model: GuildMember,
          include: [
            {
              model: Guild,
            },
          ],
        },
      ],
    });

    return character;
  }

  async findMany({
    page = 1,
    perPage = 20,
    classes = [0, 1, 2, 16, 17, 18, 32, 33, 34, 48, 49, 64, 65],
  }: getCharactersDto): Promise<{ count: number; rows: Array<Character> }> {
    const characters = await this.characterModel.findAndCountAll({
      where: {
        Class: {
          [Op.in]: classes,
        },
      },
      limit: perPage,
      offset: (page - 1) * perPage,
      order: [
        ['Resets', 'DESC'],
        ['cLevel', 'DESC'],
        ['Name', 'ASC'],
      ],
      include: [
        {
          model: MEMB_STAT,
        },
        {
          model: GuildMember,
          include: [
            {
              model: Guild,
            },
          ],
        },
      ],
    });

    return characters;
  }
}

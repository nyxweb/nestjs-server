import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

// Models
import { MEMB_INFO } from 'src/models/MEMB_INFO';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(MEMB_INFO)
    private userModel: typeof MEMB_INFO,
  ) {}

  async createUser({
    username,
    password,
    email,
  }: createUserDto): Promise<MEMB_INFO> {
    const check = await this.userModel.findOne({
      where: { [Op.or]: [{ memb___id: username }, { mail_addr: email }] },
    });

    if (check) return null;

    const user = await this.userModel.create({
      memb___id: username,
      memb__pwd: password,
      mail_addr: email,
      memb_name: Date.now().toString(),
    });

    return user;
  }
}

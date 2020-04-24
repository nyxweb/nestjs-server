import { Resolver, Query, Args } from '@nestjs/graphql';

import { GuildsService } from './guilds.service';
import { getGuildsDto } from './dto/get-guilds.dto';
import { Guild } from 'models/Guild';

@Resolver()
export class GuildsResolver {
  constructor(private readonly GuildsService: GuildsService) {}

  @Query(() => Guild)
  async guild(@Args('name') name: string) {
    return await this.GuildsService.findOne(name);
  }

  @Query(() => [Guild])
  async guilds(@Args() data: getGuildsDto) {
    return await this.GuildsService.findMany(data);
  }
}

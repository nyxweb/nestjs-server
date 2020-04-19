import { Resolver, Query, Args } from '@nestjs/graphql';
import { CharactersService } from './characters.service';
import { getCharactersDto } from './dto/get-characters.dto';

// Models
import { Character } from 'src/models/Character';

@Resolver()
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => Character)
  async character(@Args('name') name: string) {
    return await this.charactersService.findOne(name);
  }

  @Query(() => [Character])
  async characters(@Args() data: getCharactersDto) {
    return await this.charactersService.findMany(data);
  }
}

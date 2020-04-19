import { IsInt, Min, Max, IsIn } from 'class-validator';

export class getCharactersDto {
  @IsInt()
  @Min(1)
  @Max(100)
  readonly page: number;

  @IsInt()
  @Min(1)
  @Max(50)
  readonly perPage: number;

  @IsIn([0, 1, 2, 16, 17, 18, 32, 33, 34, 48, 49, 64, 65], { each: true })
  readonly classes: number[];
}

import { IsInt, Min, Max, IsIn, IsOptional } from 'class-validator';

export class getCharactersDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  readonly page: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  readonly perPage: number;

  @IsOptional()
  @IsIn([0, 1, 2, 16, 17, 18, 32, 33, 34, 48, 49, 64, 65], { each: true })
  readonly classes: number[];
}

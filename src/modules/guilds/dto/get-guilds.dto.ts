import { IsInt, Min, Max, IsOptional } from 'class-validator'

export class getGuildsDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  readonly page: number

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  readonly perPage: number
}

import { IsString, IsEmail, Length } from 'class-validator'

export class createUserDto {
  @IsString()
  @Length(4, 10)
  readonly username: string

  @IsString()
  @Length(4, 10)
  readonly password: string

  @Length(4, 50)
  @IsEmail()
  readonly email: string
}

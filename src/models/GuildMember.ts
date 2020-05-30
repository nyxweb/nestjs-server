import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo
} from 'sequelize-typescript'
// import { Character } from './Character'
import { Guild } from './Guild'

@Table
export class GuildMember extends Model<GuildMember> {
  @PrimaryKey
  @Column
  Name: string

  @Column
  G_Name: string

  @Column
  G_Level: number

  @Column
  G_Status: number

  @BelongsTo(() => Guild, { foreignKey: 'G_Name', targetKey: 'G_Name' })
  guild: Guild

  // @BelongsTo(() => Character, { foreignKey: 'Name', targetKey: 'Name' })
  // character: Character;
}

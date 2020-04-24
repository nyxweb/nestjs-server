import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table
export class GuildMember extends Model<GuildMember> {
  @PrimaryKey
  @Column
  Name: string;

  @Column
  G_Name: string;

  @Column
  G_Level: number;

  @Column
  G_Status: number;

  // @HasOne(() => Character, { sourceKey: 'Name', foreignKey: 'Name' })
  // character: Character;
}

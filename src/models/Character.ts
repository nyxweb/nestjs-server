import { Column, Model, Table, PrimaryKey, HasOne } from 'sequelize-typescript';
import { MEMB_STAT } from './MEMB_STAT';
import { GuildMember } from './GuildMember';

@Table
export class Character extends Model<Character> {
  @PrimaryKey
  @Column
  AccountID: string;

  @Column
  Name: string;

  @Column
  cLevel: number;

  @Column
  LevelUpPoint: number;

  @Column
  Class: number;

  @Column
  Experience: number;

  @Column
  Strength: number;

  @Column
  Dexterity: number;

  @Column
  Vitality: number;

  @Column
  Energy: number;

  @Column
  Leadership: number;

  @Column
  Inventory: BinaryType;

  @Column
  Money: number;

  @Column
  MapNumber: number;

  @Column
  MapPosX: number;

  @Column
  MapPosY: number;

  @Column
  PkCount: number;

  @Column
  CtlCode: number;

  @Column
  Resets: number;

  @Column
  BanPost: number;

  @Column
  IsMarried: number;

  @Column
  MarryName: string;

  @Column
  QuestNumber: number;

  @Column
  QuestMonsters: number;

  @Column
  QuestInCurse: number;

  @Column
  QuestInProgress: number;

  @Column
  SkyEventWins: number;

  @Column
  IsVip: number;

  @Column
  VipExpirationTime: number;

  @HasOne(() => MEMB_STAT, { sourceKey: 'AccountID', foreignKey: 'memb___id' })
  status: MEMB_STAT;

  @HasOne(() => GuildMember, { sourceKey: 'Name', foreignKey: 'Name' })
  guild_member: GuildMember;
}

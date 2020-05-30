import { Column, Model, Table, PrimaryKey, Default } from 'sequelize-typescript'

@Table
export class MEMB_STAT extends Model<MEMB_STAT> {
  @PrimaryKey
  @Column
  memb___id: string

  @Default(0)
  @Column
  ConnectStat: number

  @Column
  ServerName: string

  @Column
  IP: string

  @Column
  ConnectTM: string

  @Column
  DisConnectTM: string

  @Default(0)
  @Column
  TotalTime: number
}

import { Column, Model, Table, PrimaryKey } from 'sequelize-typescript';

@Table
export class MEMB_INFO extends Model<MEMB_INFO> {
  @Column
  memb_guid: number;

  @PrimaryKey
  @Column
  memb___id: string;

  @Column
  memb__pwd: string;

  @Column
  memb_name: string;

  @Column({ defaultValue: '' })
  sno__numb: string;

  @Column
  post_code?: string;

  @Column
  addr_info?: string;

  @Column
  addr_deta?: string;

  @Column
  tel__numb?: string;

  @Column
  phon_numb?: string;

  @Column
  mail_addr?: string;

  @Column
  fpas_ques?: string;

  @Column
  fpas_answ?: string;

  @Column
  job__code?: string;

  @Column
  appl_days?: string;

  @Column
  modi_days?: string;

  @Column
  out__days?: string;

  @Column
  true_days?: string;

  @Column
  mail_chek?: number;

  @Column({ defaultValue: 0 })
  bloc_code: number;

  @Column({ defaultValue: 0 })
  ctl1_code: number;

  @Column({ defaultValue: 0 })
  IsVip: number;

  @Column({ defaultValue: 0 })
  admin_lvl: number;

  @Column
  jwt_token?: string;
}

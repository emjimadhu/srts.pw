import {
  Entity, Column
} from 'typeorm';

import { BaseDBEntity } from '@srts.pw/server/common/typeorm';

@Entity()
export class User extends BaseDBEntity {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({
    unique: true
  })
  public userName: string;

  @Column({
    unique: true
  })
  public email: string;

  @Column()
  public password: string;

  @Column({
    default: false
  })
  public isVerified: boolean;
}

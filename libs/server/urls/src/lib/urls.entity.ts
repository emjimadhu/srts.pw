import {
  Entity, Column
} from 'typeorm';

import { BaseDBEntity } from '@srts.pw/server/common/typeorm';

@Entity('urls')
export class Urls extends BaseDBEntity {
  @Column({
    unique: true
  })
  public slug: string;

  @Column()
  public url: string;
}

import {
  Entity, Column
} from 'typeorm';

import { BaseDBEntity } from '@srts.pw/server/common/typeorm';

@Entity('url')
export class Url extends BaseDBEntity {
  @Column({
    unique: true
  })
  public slug: string;

  @Column()
  public longUrl: string;

  @Column()
  public shortUrl: string;

  @Column()
  public user: string;
}

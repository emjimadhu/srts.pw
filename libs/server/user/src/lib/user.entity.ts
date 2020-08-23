import {
  Entity, Column
} from 'typeorm';

import { BaseDBEntity } from '@srts.pw/server/common/typeorm';

import { UserProfile } from './models/user/profile.embeded-entity';
import { UserServices } from './models/user/services.embeded-entity';

@Entity()
export class User extends BaseDBEntity {
  @Column(type => UserProfile)
  public profile: UserProfile;

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

  @Column(type => UserServices)
  public services: UserServices;
}

import {
  DeepPartial, EntityRepository
} from 'typeorm';

import { BaseRepository } from '@srts.pw/server/common/typeorm';

import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  public async userRegister(user: DeepPartial<User>): Promise<User> {
    const userDocument = this.create(user);
    return this.save(userDocument);
  }

  public userReadByVerificationToken(token: string): Promise<User> {
    return this.findOne({
      where: {
        'services.verificationToken.token': {
          $eq: token
        }
      }
    });
  }

  public userVerificationTokenUpdate(userDocument: User): Promise<User> {
    return this.save({
      ...userDocument,
      services: {
        verificationToken: {}
      },
      isVerified: true
    });
  }

  public userReadByEmail(email: string): Promise<User> {
    return this.findOne({
      email
    });
  }

  public userReadById(id: string): Promise<User> {
    return this.findOne({
      id
    });
  }
}

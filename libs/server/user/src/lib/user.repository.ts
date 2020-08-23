import { EntityRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { BaseRepository } from '@srts.pw/server/common/typeorm';
import {
  UserRoles, generateSalt, hashPassword
} from '@srts.pw/server/common/types';

import { User } from './user.entity';
import { UserRegisterInput } from './services/user-register';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  public async register(requestVariables: UserRegisterInput, verificationToken?: string): Promise<User> {
    const {
      firstName, lastName, email, password
    } = requestVariables;

    const salt = await generateSalt();

    const user = this.create({
      profile: {
        firstName,
        lastName
      },
      userName: email,
      email,
      password: await hashPassword(password, salt),
      isVerified: false,
      services: {
        verificationToken: {
          token: verificationToken,
          generatedAt: new Date()
        }
      },
      id: uuid(),
      role: UserRoles.USER
    });


    return this.save(user);
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
}

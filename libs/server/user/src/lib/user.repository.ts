import { EntityRepository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import {
  genSalt, hash
} from 'bcrypt';

import { BaseRepository } from '@srts.pw/server/common/typeorm';

import { User } from './user.entity';
import { UserRegisterInput } from './services/user-register';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  public async register(requestVariables: UserRegisterInput, verificationToken?: string): Promise<User> {
    const {
      firstName, lastName, email, password
    } = requestVariables;

    const salt = await this.generateSalt();

    const user = this.create({
      profile: {
        firstName,
        lastName
      },
      userName: email,
      email,
      password: await this.hashPassword(password, salt),
      isVerified: false,
      services: {
        verificationToken: {
          verificationToken,
          generatedAt: new Date()
        }
      },
      id: uuid()
    });


    return this.save(user);
  }

  private generateSalt(): Promise<string> {
    return genSalt();
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return hash(password, salt);
  }
}

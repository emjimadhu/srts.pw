import {
  Injectable, NotFoundException, BadRequestException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import {
  asapScheduler, Observable, of, scheduled, zip
} from 'rxjs';
import {
  map, mergeMap
} from 'rxjs/operators';

import { User } from '../../user.entity';
import { UserRepository } from '../../user.repository';
import { UserType } from '../../user.type';
import { UserLoginInput } from './user-login.input';


@Injectable()
export class UserLoginService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository
  ) {}

  public async login(
    requestVariables: UserLoginInput
  ): Promise<Observable<UserType>> {
    const {
      email, password
    } = requestVariables;

    return scheduled(
      this.userRepository.userReadByEmail(email),
      asapScheduler
    ).pipe(
      mergeMap((userDocument: User) => {
        if (userDocument) {
          return zip(
            scheduled(
              this.validatePassword(userDocument, password),
              asapScheduler
            ),
            of(userDocument)
          ).pipe(map((
            [
              isValidPassword,
              user
            ]: [
              boolean, User
            ]) => {
            if (!isValidPassword) {
              throw new BadRequestException('Email or Password is Invalid');
            }
            return user;
          }));
        } else {
          throw new NotFoundException('User does not Exsists');
        }
      }),
      map((userDocument: User) => new UserType(userDocument))
    );
  }

  private async validatePassword(userDocument: User, password: string): Promise<boolean> {
    return ((await hash(password, userDocument.services.password.salt)) === userDocument.services.password.password);
  }
}

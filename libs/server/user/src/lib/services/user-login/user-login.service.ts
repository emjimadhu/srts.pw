import {
  Injectable, NotFoundException, UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
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
    private readonly userRepository: UserRepository,
    private jwtService: JwtService
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
      mergeMap((userDocument: User) => { // eslint-disable-line import/no-deprecated
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
              throw new UnauthorizedException('Email or Password is Invalid');
            }
            return user;
          }));
        } else {
          throw new NotFoundException('User does not Exsists');
        }
      }),
      map((userDocument: User) => {
        const payload = {
          id: userDocument.id
        };

        const accessToken = this.jwtService.sign(payload);

        return new UserType(userDocument, accessToken);
      })
    );
  }

  public async validateJwtPayload(payload: {id: string; email: string}): Promise<UserType> {
    const userDocument = await this.userRepository.userReadById(payload.id);

    if (!userDocument) {
      throw new NotFoundException('User could not be found.');
    }

    return new UserType(userDocument);
  }

  private async validatePassword(userDocument: User, password: string): Promise<boolean> {
    return ((await hash(password, userDocument.services.password.salt)) === userDocument.services.password.password);
  }
}

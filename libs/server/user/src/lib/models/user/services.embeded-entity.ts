import { Column } from 'typeorm';

import { UserVerificationToken } from './verification-token.embeded-entity';
import { UserPassword } from './password.embeded-entity';

export class UserServices {
  @Column(() => UserVerificationToken)
  public verificationToken: UserVerificationToken;

  @Column(() => UserPassword)
  public password: UserPassword;
}

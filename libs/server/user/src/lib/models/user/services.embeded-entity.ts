import { Column } from 'typeorm';

import { UserVerificationToken } from './verification-token.embeded-entity';

export class UserServices {
  @Column(type => UserVerificationToken)
  public verificationToken: UserVerificationToken;
}

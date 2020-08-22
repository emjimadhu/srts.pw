import { Column } from 'typeorm';

export class UserVerificationToken {
  @Column()
  public verificationToken: string;

  @Column()
  public generatedAt: Date;
}

import { Column } from 'typeorm';

export class UserVerificationToken {
  @Column()
  public token: string;

  @Column()
  public generatedAt: Date;
}

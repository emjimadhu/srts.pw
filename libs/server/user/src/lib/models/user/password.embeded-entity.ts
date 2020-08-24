import { Column } from 'typeorm';

export class UserPassword {
  @Column()
  public password: string;

  @Column()
  public salt: string;

  @Column()
  public generatedAt: Date;

  @Column()
  public updatedAt: Date;
}

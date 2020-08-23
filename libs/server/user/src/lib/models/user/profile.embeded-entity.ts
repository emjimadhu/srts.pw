import { Column } from 'typeorm';

export class UserProfile {
  @Column()
  public firstName: string;

  @Column()
  public lastName: string;
}

import { Column } from 'typeorm';

export class MetaData {
  @Column({
    nullable: true
  })
  public description: string;

  @Column({
    nullable: true
  })
  public image: string;

  @Column({
    nullable: true
  })
  public title: string;
}

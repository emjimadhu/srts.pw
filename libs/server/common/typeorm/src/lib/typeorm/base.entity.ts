import {
  ObjectIdColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, BaseEntity
} from 'typeorm';

export abstract class BaseDBEntity extends BaseEntity {
  @ObjectIdColumn()
  public _id: string;

  @PrimaryColumn()
  public id: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}

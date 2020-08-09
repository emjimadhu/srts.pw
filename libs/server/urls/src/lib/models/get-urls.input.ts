import {
  InputType, Field
} from '@nestjs/graphql';
import {
  IsOptional, IsUUID
} from 'class-validator';


@InputType()
export class GetUrlsInput {
  @Field({
    nullable: true
  })
  @IsUUID('4', {
    message: 'Invalid User'
  })
  @IsOptional()
  public user: string;
}

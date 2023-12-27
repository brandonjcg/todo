import { ArgsType, Field } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@ArgsType()
export class StatusArgs {
  @Field(() => Boolean, {
    description: 'The done state of the todo',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
}

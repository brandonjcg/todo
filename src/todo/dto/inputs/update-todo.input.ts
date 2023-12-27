import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int, {
    description: 'The id of the todo',
  })
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  id: number;

  @Field(() => String, {
    description: 'The description of the todo',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  @IsOptional()
  description?: string;

  @Field(() => Boolean, {
    description: 'The done state of the todo',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  done?: boolean;
}

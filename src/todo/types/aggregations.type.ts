import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Todo quick aggregations' })
export class AggreagationsType {
  @Field(() => Int, { description: 'Total todos' })
  total: number;

  @Field(() => Int, { description: 'Completed todos' })
  completed: number;

  @Field(() => Int, { description: 'Pending todos' })
  pending: number;

  @Field(() => Int, {
    description: 'Total todos (old)',
    deprecationReason: 'Use total instead',
  })
  totalTodos: number;
}

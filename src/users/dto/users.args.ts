import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@ArgsType()
export class UsersArgs {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => Int)
  @Min(0)
  skip = 0;
}

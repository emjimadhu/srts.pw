import {
  createParamDecorator, ExecutionContext
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const ResponseGql = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const gqlExecutionContext = GqlExecutionContext.create(context);
    return gqlExecutionContext.getContext().req.res;
  }
);

export const GqlUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const gqlExecutionContext = GqlExecutionContext.create(context);
    return gqlExecutionContext.getContext().req.user;
  }
);

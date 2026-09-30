import { authMiddleware } from '@middlewares';
import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import AuthorsQueryType from 'graphQl/schemas/authors-schema';
import {} from '../../graphQl/schemas';

const router = Router();

router.get(
  '/user',
  authMiddleware.checkToken,
  graphqlHTTP({
    schema: AuthorsQueryType,
    graphiql: true,
  }),
);

export default router;

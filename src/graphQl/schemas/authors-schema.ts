import { usersRepository } from '@repositories';
import { GraphQLList, GraphQLObjectType } from 'graphql';

import AuthorType from './author-schema';

const AuthorsQueryType = new GraphQLObjectType({
  name: 'BlogAppSchema',
  description: 'Blog Application Schema Query Root',
  fields: () => ({
    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of all Authors',
      resolve: async () => {
        await usersRepository.getManyByFilter({});
      },
    },
  }),
});

export default AuthorsQueryType;

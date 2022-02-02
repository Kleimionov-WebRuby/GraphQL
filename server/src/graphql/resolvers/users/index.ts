import { IResolvers } from '@graphql-tools/utils';

import { TApolloContext, IMovie, IUser } from 'lib/types';

export const usersResolvers: IResolvers = {
  Query: {
    users: async (_root: undefined, _args: {}, { db }: TApolloContext): Promise<IUser[]> => {
      return await db.users.find().toArray();
    },
  },

  User: {
    id: (movie: IMovie): string => movie._id.toString(),
  },
};

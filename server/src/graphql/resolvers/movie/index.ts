import { IResolvers } from '@graphql-tools/utils';
import { ObjectId } from 'mongodb';

import { TApolloContext, IMovie, IUser } from 'lib/types';

export const movieResolvers: IResolvers = {
  Query: {
    movies: async (_root: undefined, _args: {}, { db }: TApolloContext): Promise<IMovie[]> => {
      return await db.movies.find().toArray();
    },
    moviesById: async (
      _root: undefined,
      { id }: { id: string },
      { db }: TApolloContext,
    ): Promise<IMovie> => {
      const movie = await db.movies.findOne({ _id: new ObjectId(id) });

      if (!movie) {
        throw new Error('failed to find movie');
      }

      return movie;
    },
  },
  Mutation: {
    deleteMovie: async (
      _root: undefined,
      { id }: { id: string },
      { db }: TApolloContext,
    ): Promise<IMovie> => {
      const deleteRes = await db.movies.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteRes.value) {
        throw new Error('failed to delete movie');
      }

      return deleteRes.value;
    },
  },

  Movie: {
    id: (movie: IMovie): string => movie._id.toString(),
    // !!! Here can map fields from another tables
    users: async (_movie: undefined, _args: {}, { db }: TApolloContext) => {
      try {
        const users = await db.users.find().toArray();
        if (!users.length) {
          throw new Error('Can not find any user');
        }
        return users;
      } catch (error) {
        throw new Error(`Failed to fetch users ${error}`);
      }
    },
  },
  User: {
    id: (user: IUser): string => user._id.toString(),
  },
};

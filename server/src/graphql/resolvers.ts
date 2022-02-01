import { IResolvers } from '@graphql-tools/utils';
import { ObjectId } from 'mongodb';

import { TApolloContext, IMovie } from 'lib/types';

export const resolvers: IResolvers = {
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
  },
};

import { IResolvers } from '@graphql-tools/utils';
import { ObjectId } from 'mongodb';

import { IDatabase, IMovies } from 'lib/types';

export const resolvers: IResolvers = {
  Query: {
    movies: async (_root: undefined, _args: {}, { db }: { db: IDatabase }): Promise<IMovies[]> => {
      return await db.movies.find().toArray();
    },
  },
  Mutation: {
    deleteMovie: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: IDatabase },
    ): Promise<IMovies> => {
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
    id: (movie: IMovies): string => movie._id.toString(),
  },
};

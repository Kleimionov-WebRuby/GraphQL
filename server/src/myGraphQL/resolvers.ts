import { IResolvers } from '@graphql-tools/utils';

import { movies } from '../mock';

export const resolvers: IResolvers = {
  Query: {
    movies: () => movies,
  },
  Mutation: {
    deleteMovie: (_root: undefined, { id }: { id: string }) => {
      const movieIndex = movies.findIndex(({ id: currId }) => currId === id);
      if (movieIndex !== -1) {
        return movies.splice(movieIndex, 1)[0];
      }
      throw new Error('Failed to delete listing');
    },
  },
};

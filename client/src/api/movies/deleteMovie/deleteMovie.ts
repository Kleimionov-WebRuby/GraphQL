import { server } from 'api/server';
import { IMovie } from 'api/movies/fetchMovies/types';
import { IDeleteMoviesData, IDeleteMoviesVariables } from './types';

const DELETE_MOVIE = `
  mutation ($id: ID!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

export const deleteMovie = async (id: string): Promise<IMovie> => {
  const { data } = await server.fetch<IDeleteMoviesData, IDeleteMoviesVariables>({
    query: DELETE_MOVIE,
    variables: { id },
  });

  return data.deleteMovie;
};

import { server } from 'api/server';
import { IMoviesData, IMovie } from './types';

const MOVIES = `
  query Movies  {
    movies {
      id
      name
      genre
    }
  }
`;

export const fetchMovies = async (): Promise<IMovie[]> => {
  const { data } = await server.fetch<IMoviesData>({ query: MOVIES });

  return data.movies;
};

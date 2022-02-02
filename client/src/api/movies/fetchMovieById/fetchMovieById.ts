import { server } from 'api/server';
import { IMovie } from 'api/movies/fetchMovies/types';
import { IMoviesData } from './types';

const MOVIE_BY_ID = `
  query($id: ID!) {
    moviesById(id: $id) {
      id
      name
      genre
    }
  }
`;

export const fetchMovieById = async (): Promise<IMovie> => {
  const { data } = await server.fetch<IMoviesData>({
    query: MOVIE_BY_ID,
    variables: { id: '61f92420b42d822cadf7c407' },
  });

  return data.moviesById;
};

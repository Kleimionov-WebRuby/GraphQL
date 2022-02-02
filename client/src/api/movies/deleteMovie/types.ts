import { IMovie } from 'api/movies/fetchMovies/types';

export interface IDeleteMoviesData {
  deleteMovie: IMovie;
}
export interface IDeleteMoviesVariables {
  id: string;
}

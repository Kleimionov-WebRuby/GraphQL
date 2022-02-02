import { gql } from '@apollo/client';
import { IMovie } from '../fetchMovies';

export const DELETE_MOVIE = gql`
  mutation DeleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;

export interface IDeleteMoviesData {
  deleteMovie: IMovie;
}
export interface IDeleteMoviesVariables {
  id: string;
}

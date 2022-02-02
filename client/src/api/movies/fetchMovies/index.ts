import { gql } from '@apollo/client';

export const MOVIES = gql`
  query Movies {
    movies {
      id
      name
      genre
    }
  }
`;

export interface IMovie {
  id: string;
  name: string;
  genre: string;
}

export interface IMoviesData {
  movies: IMovie[];
}

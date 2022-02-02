import { gql } from '@apollo/client';

export const MOVIE_BY_ID = gql`
  query MoviesById($id: ID!) {
    moviesById(id: $id) {
      id
      name
      genre
    }
  }
`;

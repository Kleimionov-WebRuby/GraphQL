import { gql } from '@apollo/client';

export const MOVIE_BY_ID = gql`
  query ($id: ID!) {
    moviesById(id: $id) {
      id
      name
      genre
    }
  }
`;

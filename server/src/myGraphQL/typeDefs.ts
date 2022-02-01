import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Movie {
    id: ID!
    name: String!
    genre: String!
  }

  type Query {
    movies: [Movie!]!
  }
  type Mutation {
    deleteMovie(id: ID!): Movie!
  }
`;

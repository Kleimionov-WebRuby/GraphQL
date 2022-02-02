import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Movie {
    id: ID!
    name: String!
    genre: String!
    users: [User]
  }

  type Query {
    movies: [Movie!]!
    moviesById(id: ID!): Movie!
    users: [User!]!
  }
  type Mutation {
    deleteMovie(id: ID!): Movie!
  }
`;

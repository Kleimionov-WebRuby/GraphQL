require('dotenv').config();
import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers, typeDefs } from './myGraphQL';
import { connectDatabase } from './database';

const startServer = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({ typeDefs, resolvers, context: () => ({ db }) });

  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });

  const movies = await db.movies.find().toArray();
  console.log('🚀 ~ startServer ~ movies', movies);
};

startServer(express());

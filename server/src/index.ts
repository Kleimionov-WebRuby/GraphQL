import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers, typeDefs } from './myGraphQL';

const app = express();
const PORT = 3005;

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app, path: '/api' });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer();

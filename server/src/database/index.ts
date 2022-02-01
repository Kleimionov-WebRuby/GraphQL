import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
  const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net`;

  const client = await MongoClient.connect(url);
  const db = client.db('main');

  return {
    movies: db.collection('test_movies'),
  };
};

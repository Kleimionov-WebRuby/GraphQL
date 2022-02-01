import { ObjectId, Collection } from 'mongodb';

export interface IMovie {
  _id: ObjectId;
  name: string;
  genre: string;
}

export interface IDatabase {
  movies: Collection<IMovie>;
}

export type TApolloContext = { db: IDatabase };

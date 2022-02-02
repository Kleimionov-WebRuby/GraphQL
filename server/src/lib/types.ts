import { ObjectId, Collection } from 'mongodb';

export interface IMovie {
  _id: ObjectId;
  name: string;
  genre: string;
}

export interface IUser {
  _id: ObjectId;
  name: string;
}

export interface IDatabase {
  movies: Collection<IMovie>;
  users: Collection<IUser>;
}

export type TApolloContext = { db: IDatabase };

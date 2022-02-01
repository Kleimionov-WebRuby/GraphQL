import { ObjectId, Collection } from 'mongodb';

export interface IMovies {
  _id: ObjectId;
  name: string;
  genre: string;
}

export interface IDatabase {
  movies: Collection<IMovies>;
}

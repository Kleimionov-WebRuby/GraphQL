require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { IMovies } from '../src/lib/types';

const seed = async () => {
  try {
    console.log('[seed] : running...');

    const db = await connectDatabase();

    const movies: IMovies[] = [
      {
        _id: new ObjectId(),
        name: 'The Shawshank Redemption',
        genre: 'Comedy',
      },
      {
        _id: new ObjectId(),
        name: 'The Godfather',
        genre: 'Drama',
      },
      {
        _id: new ObjectId(),
        name: 'The Godfather: Part II',
        genre: 'Drama',
      },
      {
        _id: new ObjectId(),
        name: 'Pulp Fiction',
        genre: 'Romance',
      },
      {
        _id: new ObjectId(),
        name: 'The Good, the Bad and the Ugly',
        genre: 'Comedy',
      },
      {
        _id: new ObjectId(),
        name: 'The Dark Knight',
        genre: 'Comedy',
      },
      {
        _id: new ObjectId(),
        name: '12 Angry Men',
        genre: 'Romance',
      },
      {
        _id: new ObjectId(),
        name: "Schindler's List",
        genre: 'Comedy',
      },
      {
        _id: new ObjectId(),
        name: 'The Lord of the Rings: The Return of the King',
        genre: 'Comedy',
      },
      {
        _id: new ObjectId(),
        name: 'Fight Club',
        genre: 'Comedy',
      },
    ];

    for (const movie of movies) {
      await db.movies.insertOne(movie);
    }

    console.log('[seed] : success');
  } catch {
    throw new Error('failed to seed database');
  }
};

seed();

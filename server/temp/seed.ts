require('dotenv').config();

import { ObjectId } from 'mongodb';
import { connectDatabase } from '../src/database';
import { IMovie, IUser } from '../src/lib/types';

const seed = async () => {
  try {
    console.log('[seed] : running...');

    const db = await connectDatabase();

    const movies: IMovie[] = [
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
    const users: IUser[] = [
      {
        _id: new ObjectId(),
        name: 'TurboSlayer',
      },
      {
        _id: new ObjectId(),
        name: 'CrypticHatter',
      },
      {
        _id: new ObjectId(),
        name: 'CrashTV',
      },
      {
        _id: new ObjectId(),
        name: 'Toxic Headshot',
      },
      {
        _id: new ObjectId(),
        name: 'IronMerc',
      },
      {
        _id: new ObjectId(),
        name: 'SteelTitan',
      },
      {
        _id: new ObjectId(),
        name: 'Blue Defender',
      },
    ];

    for (const movie of movies) {
      await db.movies.insertOne(movie);
    }
    for (const user of users) {
      await db.users.insertOne(user);
    }

    console.log('[seed] : success');
  } catch {
    throw new Error('failed to seed database');
  }
};

seed();

export interface IMovie {
  id: string;
  name: string;
  genre: string;
}

export interface IMoviesData {
  movies: IMovie[];
}

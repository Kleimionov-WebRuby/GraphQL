import { useEffect, useState } from 'react';

import { fetchMovies, IMovie } from 'api/movies/fetchMovies';
import { deleteMovie } from 'api/movies/deleteMovie';

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    (async function () {
      const response = await fetchMovies();

      setMovies(response);
    })();
  }, []);

  const handleDelete = (id: string) => async () => {
    await deleteMovie(id);
  };

  return (
    <ul>
      {movies.map((i) => (
        <li key={i.id} style={{ display: 'flex' }}>
          <div>{i.name}</div>
          <button onClick={handleDelete(i.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Movies;

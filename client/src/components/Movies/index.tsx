import { useEffect, useState } from 'react';

import { server } from 'api';

const MOVIES = `
  query Movies  {
    movies {
      id
      name
      genre
    }
  }
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      const { data } = await server.fetch({ query: MOVIES });
      setMovies(data.movies);
    })();
  }, []);

  return (
    <div>
      {movies.map((i: any) => (
        <div>{i.name}</div>
      ))}
    </div>
  );
};

export default Movies;

import { useQuery } from '@apollo/client';

import { MOVIES, IMoviesData } from 'api/movies/fetchMovies';
import MovieItem from 'components/Movie';

const Movies = () => {
  const { loading, error, data, refetch } = useQuery<IMoviesData>(MOVIES);

  if (loading) return <>Loading...</>;
  if (error) return <>{error.message}</>;

  return (
    <ul>
      {data?.movies.map((element) => (
        <MovieItem key={element.id} refetch={refetch} {...element} />
      ))}
    </ul>
  );
};

export default Movies;

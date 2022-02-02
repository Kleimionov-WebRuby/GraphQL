import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { DELETE_MOVIE, IDeleteMoviesData, IDeleteMoviesVariables } from 'api/movies/deleteMovie';
import { IProps } from './types';

const MovieItem = ({ id, name, genre, refetch }: IProps) => {
  const [deleteMovie, { loading, error }] = useMutation<IDeleteMoviesData, IDeleteMoviesVariables>(
    DELETE_MOVIE,
  );

  const handleDelete = useCallback(
    (id: string) => async () => {
      await deleteMovie({ variables: { id } });

      refetch();
    },
    [deleteMovie, refetch],
  );

  return error ? (
    <li style={{ color: 'red' }}>{error.message}</li>
  ) : (
    <li key={id} style={{ display: 'flex' }}>
      <div>
        {name} - {genre}
      </div>
      <button disabled={loading} onClick={handleDelete(id)}>
        {!loading ? 'Delete' : 'Loading...'}
      </button>
    </li>
  );
};

export default MovieItem;

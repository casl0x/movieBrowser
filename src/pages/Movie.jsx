import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FetchMovie } from '../utils/request';

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieData = await FetchMovie(movieId);
      setMovie(movieData);
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {convertDate(movie.release_date)}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}


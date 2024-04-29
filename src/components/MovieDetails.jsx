import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FetchMovie } from '../utils/request';
import convertDate from '../utils/convertDate';

export default function MovieDetails() {
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
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>Release Date: {convertDate(movie.release_date)}</p>
            <p>{movie.overview}</p>
            
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}

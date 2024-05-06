import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FetchMovie } from '../utils/request';
import {convertDate, convertTime} from '../utils/convertTime';
import { useMediaQuery } from 'react-responsive';

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const isMobile = useMediaQuery({maxWidth: "768px"});
    const imgClassName = isMobile ? "horizontal" : "vertical";
  
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
          <div className='details'>
            <h2>{movie.title}</h2>            
            <img src={isMobile ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={`details-img ${imgClassName}`}/>
            <div className='details-info'>
              <p>{convertTime(movie.runtime)}</p>
              <p>( {convertDate(movie.release_date)} )</p>
              <p>Genres : {movie.genres.map((genre, index) => (
                    <span key={genre.id}>{genre.name} {index !== movie.genres.length - 1 && " - "}</span>
                  ))}
               </p> 
              <p>{movie.overview}</p>              
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}

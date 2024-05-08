import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { FetchMovie } from '../utils/request';
import {convertDate, convertTime} from '../utils/convertTime';
import { useMediaQuery } from 'react-responsive';

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const isMobile = useMediaQuery({maxWidth: "768px"});
    const displayDetails = isMobile ? "flex" : "grid";
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
          <div className={`details ${displayDetails}`}>
            <h2 className='title'>{movie.title}</h2>            
            <img src={isMobile ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={`details-img ${imgClassName} ${isMobile ? "flex-img" : "grid-img"}`}/>
            <div className={`details-info ${isMobile ? "flex-info" : "grid-info"}`}>
              <p>{convertTime(movie.runtime)}</p>
              <p>( {convertDate(movie.release_date)} )</p>
              <p>Genres : {movie.genres.map((genre, index) => (
                    <span key={genre.id}>{genre.name} {index !== movie.genres.length - 1 && " - "}</span>
                  ))}
               </p> 
              <p className='overview'>{movie.overview}</p>              
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )
}

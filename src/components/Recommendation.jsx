import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FetchRecommendatedMovies } from '../utils/request'

export function MovieRecommendation() {
    const [movie, setMovie] = useState([]);
    const { movieId } = useParams();

    const settings = {
      initialSlide: 0,
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
          {
              breakpoint: 770,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: true,
                arrows: false,
              }
          },
          {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false,
              }
          }
      ]
  }
    
    useEffect(() => {
        const fetchMovieReco = async () => {
          const movieData = await FetchRecommendatedMovies(movieId);
          setMovie(movieData);
        };
    
        fetchMovieReco();
  
      }, [movieId]);
  return (
    <div>
      <h2 className="title">Recommendation</h2>
    {movie ? (
        <div className='movie'>
            <Slider {...settings}>
                {movie.map(m => (
                    <Link to={`/movie/${m.id}`} key={m.id}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} className='movie-poster'/>
                        </div>                        
                    </Link>
                ))}
            </Slider>
        </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}
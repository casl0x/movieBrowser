import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FetchPopularMovie} from '../utils/request';

export default function PopularMovies() {
    const [movie, setMovie] = useState([]);

    const settings = {
        initialSlide: -1,
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        centerMode: false,
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
        const fetchPopMovie = async () => {
            const movies = await FetchPopularMovie();
            setMovie(movies)
        }
        fetchPopMovie()
    }, [])

    return (
        <section className='container'>
            <h2 className="title">Popular Movies</h2>
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
        </section>
    )
}

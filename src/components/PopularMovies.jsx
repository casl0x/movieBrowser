import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FetchPopularMovie} from '../utils/request';
import {convertDate} from '../utils/convertTime';

export default function PopularMovies() {
    const [movie, setMovie] = useState([]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  initialSlide: 4
                }
            },
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
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
                                <h2 className='movie-title'>{m.title}</h2>
                                <p className='movie-info'>{convertDate(m.release_date)}</p>
                            </div>                        
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

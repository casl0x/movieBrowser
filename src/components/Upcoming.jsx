import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FetchUpcoming } from '../utils/request';

export default function Upcoming() {
    const [movie, setMovie] = useState([]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    
    useEffect(() => {
        const fetchComingSoon = async () => {
            const movies = await FetchUpcoming();
            setMovie(movies)
        }
        fetchComingSoon()
    }, [])

    return (
        <section className='container'>
            <h1 className="title">Upcoming Movie</h1>
            <div className='movie'>
                <Slider {...settings}>
                    {movie.map(m => (
                        <div key={m.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} className='movie-poster'/>
                            <h2 className='movie-title'>{m.title}</h2>
                            <p className='movie-info'>{m.release_date}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

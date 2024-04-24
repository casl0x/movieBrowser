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
        slidesToShow: 1,
        slidesToScroll: 1
    }
    
    useEffect(() => {
        const fetchComingSoon = async () => {
            const movies = await FetchUpcoming();
            setMovie(movies)
        }
        fetchComingSoon()
    }, [])

    return (
        <div>
            <h1 className="title">Upcoming Movie</h1>
            <div>
                <Slider {...settings}>
                    {movie.map(m => (
                        <div key={m.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} />
                            <div>
                                <h3>{m.title}</h3>
                                <p>{m.release_date}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

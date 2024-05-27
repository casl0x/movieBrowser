import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FetchPopularSeries} from '../utils/request';

export default function PopularSeries() {
    const [serie, setSerie] = useState([]);

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
        const fetchPopSeries = async () => {
            const series = await FetchPopularSeries();
            setSerie(series)
        }
        fetchPopSeries()
    }, [])

    return (
        <section className='container'>
            <h2 className="title">Popular Series</h2>
            <div className='movie'>
                <Slider {...settings}>
                    {serie.map(s => (
                        <Link to={`/tv/${s.id}`} key={s.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500${s.poster_path}`} alt={s.name} className='movie-poster'/>
                            </div>                        
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

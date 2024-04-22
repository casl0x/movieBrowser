import React, { useState } from 'react'
import { FetchUpcoming } from '../utils/request';

export default function Upcoming() {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchComingSoon = async () => {
            const movies = await FetchUpcoming();
            setMovie(movies)
        }
        fetchComingSoon()
    }, [])

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="daily">Daily discoveries</h1>
            <div className="daytop">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="poster"/>
                <div className="banner">
                    <p className="banner-release">{movie.release_date}</p>
                    <h2 className="banner-title">{movie.title}</h2>
                    <p className="banner-vote">{movie.vote_average}</p>
                </div>                
            </div>
        </div>
    )
}

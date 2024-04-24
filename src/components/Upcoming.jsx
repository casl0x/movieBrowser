import React, { useState, useEffect } from 'react'
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

    return (
        <div>
            <h1 className="title">Upcoming Movie</h1>
            <div>
                {movie.map(m => (
                    <div className="" key={m.id}>
                        <img className="" src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} />
                        <div className="">
                            <h3 className="">{m.title}</h3>
                            <p className="">{m.release_date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

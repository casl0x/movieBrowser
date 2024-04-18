import { useEffect, useState } from "react";
import { FetchBanner } from "../utils/request";

export function Banner () {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchMovie = async () => {
            const movies = await FetchBanner();
            const randomMovie = Math.floor(Math.random()*movies.length);
            setMovie(movies[randomMovie])
        }
        fetchMovie()
    }, [])

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div className="banner">
            <h1 className="daily">Daily discoveries</h1>
            <div className="daytop">
                <figure >
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="poster"/>
                </figure>
                <div className="bannerInfo">
                    <h1 className="bannerTitle">{movie.title}</h1>
                    <p className="infos"><span className="color">{movie.vote_average}</span></p>
                    <p className="overviewBanner">{movie.overview}</p>
                </div>                
            </div>
        </div>
    )
};
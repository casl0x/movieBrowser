import { useEffect, useState } from "react";
import { FetchTopRated } from "../utils/request";
import {convertDate} from "../utils/convertTime";

export function Banner () {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        const fetchMovie = async () => {
            const movies = await FetchTopRated();
            const randomMovie = Math.floor(Math.random()*movies.length);
            setMovie(movies[randomMovie])
        }
        fetchMovie()
    }, [])

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <section className="discover">
            <h1 className="title">Daily discoveries</h1>
            <div className="daytop">
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} className="poster"/>
                <div className="banner">
                    <p className="banner-release">{convertDate(movie.release_date)}</p>
                    <h2 className="banner-title">{movie.title}</h2>
                    <p className="banner-vote">{movie.vote_average}</p>
                </div>                
            </div>
        </section>
    )
};
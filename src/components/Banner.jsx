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
};
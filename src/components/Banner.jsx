import { useEffect, useState } from "react";
import { FetchBanner } from "../utils/request";

export function Banner () {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchMovie = async () => {
            const movies = await FetchBanner();
            const randomMovie = Math.floor(Math.random()*movies.length);
            setMovie(randomMovie)
        }
        fetchMovie()
    }, [])

};
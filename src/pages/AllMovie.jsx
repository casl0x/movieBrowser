import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FetchAllMovie } from '../utils/request';

export default function AllMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const moviesData = await FetchAllMovie();
                setMovies(moviesData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <section>
            {movies.map(m => (
                <Link to={`/movie/${m.id}`} key={m.id}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} className='movie-poster'/>
                    </div>                        
                </Link>
            ))}
        </section>
    );
}

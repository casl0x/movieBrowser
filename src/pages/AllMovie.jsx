import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FetchAllMovie } from '../utils/request';
import Genres from '../components/Genres';

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
        <>
            {/* <Genres /> */}
            <section className='all'>
                {movies.map(m => (
                    <Link to={`/movie/${m.id}`} key={m.id} className='all-card'>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} className='all-poster'/>
                        </div>                        
                    </Link>
                ))}
            </section>
        </>
    );
}

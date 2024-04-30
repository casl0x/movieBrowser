import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FetchAllMovie } from '../utils/request';
import { convertDate } from '../utils/convertTime';

export default function AllMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const  moviesData  = await FetchAllMovie();
            setMovies(moviesData);
        };
        fetchMovies();
    }, []);

    return (
        <section>
            {movies.map(m => (
                <Link to={`/movie/${m.id}`} key={m.id}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} className='movie-poster'/>
                        <h2 className='movie-title'>{m.title}</h2>
                        <p className='movie-info'>{convertDate(m.release_date)}</p>
                    </div>                        
                </Link>
            ))}
        </section>
    );
}

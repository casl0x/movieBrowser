import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { FetchAllMovie } from '../utils/request';
import { convertDate } from '../utils/convertTime';

export default function AllMovie() {
    const [movie, setMovie] = useState([]);
    const { page } = useParams();
    const navigate = useNavigate();

    const currentPage = page ? parseInt(page) : 1;

    useEffect(() => {
        console.log("Fetching movies for page:", currentPage);
    const fetchMovies = async () => {
        try {
            const movies = await FetchAllMovie(currentPage);
            console.log("Fetched movies:", movies);
            setMovie(movies);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };
    fetchMovies();
    }, [currentPage])

    const nextPage = () => {
        const nextPageNumber = currentPage + 1;
        return navigate(`/movie/page=${nextPageNumber}`)
    }

    const prevPage = () => {
        const prevPageNumber = currentPage - 1;
        return navigate(`/movie/page=${prevPageNumber}`)
    }

  return (
    <section>
        {movie.map(m => (
            <Link to={`/movie/${m.id}`} key={m.id}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={m.title} className='movie-poster'/>
                    <h2 className='movie-title'>{m.title}</h2>
                    <p className='movie-info'>{convertDate(m.release_date)}</p>
                </div>                        
            </Link>
        ))}
        <div>
            {parseInt(page) > 1 && <button onClick={prevPage}>Previous Page</button>}
            <button onClick={nextPage}>Next Page</button>
        </div>
    </section>
  )
}

import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FetchAllSerie } from '../utils/request';

export default function AllSerie() {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const seriesData = await FetchAllSerie();
                setSeries(seriesData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSeries();
    }, []);

    return (
        <section>
            {series.map(s => (
                <Link to={`/tv/${s.id}`} key={s.id}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w500${s.poster_path}`} alt={s.title} className='movie-poster'/>
                    </div>                        
                </Link>
            ))}
        </section>
    );
}

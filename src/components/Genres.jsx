import React, { useEffect, useState } from 'react'
import { FetchGenre } from '../utils/request'
import { useParams } from 'react-router-dom'

export default function Genres() {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchMovieGenre = async () => {
            const genreData = await FetchGenre()
            setGenres(genreData)
        };
        fetchMovieGenre()
    }, [])
  return (
    <div>
        <select name="genre" id="genre">
            <option value="">xxx</option>
            {genres.map(g => (
                <option key={g.id} value={g.name}>{g.name}</option>
            ))}
        </select>
    </div>
  )
}

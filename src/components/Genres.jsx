import React, { useEffect, useState } from 'react'
import { FetchGenre } from '../utils/request'

export default function Genres({onSelectGenre}) {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchMovieGenre = async () => {
            const genreData = await FetchGenre()
            setGenres(genreData)
        };
        fetchMovieGenre()
    }, [])

    const handleSelect = (e) => {
        const selectedGenre=e.target.value
        onSelectGenre(selectedGenre)
    }

  return (
    <div>
        <select name="genre" id="genre" onChange={handleSelect}>
            <option value="">Select genre</option>
            {genres.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
            ))}
        </select>
    </div>
  )
}

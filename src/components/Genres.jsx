import React, { useEffect, useState } from 'react'
import { FetchGenre } from '../utils/request'
import { useParams } from 'react-router-dom'

export default function Genres() {
    const [genre, setGenre] = useState([])
    const {genreId} = useParams()

    useEffect(() => {
        const fetchMovieGenre = async () => {
            const genreData = FetchGenre(genreId)
            setGenre(genreData)
        };
        fetchMovieGenre()
    }, [genreId])

  return (
    <div>
        <select name="genre" id="genre">
            <option value="">xxx</option>
            {genre.map(g => {
                <option key={g.id} value={g.name}>{g.name}</option>
            })}
        </select>
    </div>
  )
}

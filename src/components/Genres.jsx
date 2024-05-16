import React, { useEffect, useState } from 'react'
import { FetchGenreMovie, FetchGenreSerie } from '../utils/request'

export function GenresMovie({onSelectGenre}) {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchMovieGenre = async () => {
            const genreData = await FetchGenreMovie()
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
        <label htmlFor="" className='filter'> Genre :
            <select name="genre" className='filter-select' onChange={handleSelect}>
                <option value="">~~</option>
                {genres.map(g => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>
        </label>
    </div>
  )
}

export function GenresSeries({onSelectGenre}) {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        const fetchSerieGenre = async () => {
            const genreData = await FetchGenreSerie()
            setGenres(genreData)
        };
        fetchSerieGenre()
    }, [])

    const handleSelect = (e) => {
        const selectedGenre=e.target.value
        onSelectGenre(selectedGenre)
    }

  return (
    <div>
        <label htmlFor="" className='filter'>Genre : 
            <select name="genre" className='filter-select' onChange={handleSelect}>
                <option value="">~~</option>
                {genres.map(g => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>
        </label>
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FetchMovie } from '../utils/request'

export default function Movie() {
  const [movie, setMovie] = useState(null)
  const { movieId } = useParams()

  useEffect(() => {
    const fetchMovieDetails = async () => {
        const movies = await FetchMovie(movieId);
        setMovie(movies)
    }
    fetchMovieDetails()
}, [movieId])

  return (
    <>
      {
        movie ? (
          <h2>{movie.title}</h2>
          
        ) : (
          <p>Loading ...</p>
        )
      }
    </>
  )
}


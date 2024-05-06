import MovieDetails from "../components/MovieDetails";
import MovieRecommendation from "../components/MovieRecommendation";
import { FetchMovie } from "../utils/request";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      <MovieDetails />
      <MovieRecommendation />
    </>
  )
}


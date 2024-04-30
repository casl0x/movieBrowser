import MovieDetails from "../components/MovieDetails";

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
    </>
  )
}


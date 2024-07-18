import MovieItem from './MovieItem'

function MovieList(props) {
  return props.movies.map((x) => <MovieItem key={x.id} movie={x} />)
}

export default MovieList

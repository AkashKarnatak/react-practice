import { useEffect, useState, useCallback } from 'react'
import MovieList from './components/MovieList'
import Section from './components/Section'
import MovieForm from './components/MovieForm'
import Button from './components/Button'

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:8080/api/films')
      if (!res.ok) {
        throw new Error('Something went wrong!')
      }
      const movies = (await res.json()).movies
      setMovies(movies)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMovieHandler()
  }, [fetchMovieHandler])

  let content = <p className='text-2xl'>Found no movies</p>

  if (isLoading) {
    content = <p className='text-2xl'>Loading...</p>
  } else if (error !== '') {
    content = <p className='text-2xl'>{error}</p>
  } else if (movies.length > 0) {
    content = <MovieList movies={movies} />
  }

  return (
    <div className='flex min-h-svh flex-col items-center gap-8 bg-[#222] p-8 font-roboto'>
      <Section>
        <MovieForm />
      </Section>
      <Section>
        <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
      </Section>
      <Section>{content}</Section>
    </div>
  )
}

export default App

import { useEffect, useState, useCallback } from 'react'

function Card(props) {
  return (
    <div
      className={`rounded-2xl shadow-[0_0_20px_10px_rgba(0,0,0,0.3)] ${props.className || ''}`}
    >
      {props.children}
    </div>
  )
}

function Section(props) {
  return (
    <Card
      className={`flex w-[min(90%,1200px)] flex-col items-center gap-8 bg-white py-16 ${props.className || ''}`}
    >
      {props.children}
    </Card>
  )
}

function MovieForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const postMovieHandler = async ({ title, openingText, releaseDate }) => {
    setIsLoading(true)
    setError('')
    try {
      const res = await fetch('http://localhost:8080/api/films', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, openingText, releaseDate }),
      })
      if (!res.ok) {
        throw new Error('Something went wrong!')
      }
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData.entries())

    await postMovieHandler({
      id: Math.random(),
      title: formObj.title,
      openingText: formObj['opening-text'],
      releaseDate: formObj['release-date'],
    })
  }

  let status = ''

  if (isLoading) {
    status = <p className='text-2xl'>Sending...</p>
  } else if (error !== '') {
    status = <p className='text-2xl'>{error}</p>
  }

  return (
    <form
      onSubmit={formSubmitHandler}
      className='flex w-[90%] flex-col items-center gap-8'
    >
      <div className='flex w-full flex-col gap-2'>
        <label htmlFor='title' className='text-2xl font-bold'>
          Title
        </label>
        <input
          type='text'
          name='title'
          id='title'
          className='w-full rounded-2xl border border-gray-300 p-1 text-xl'
        />
      </div>
      <div className='flex w-full flex-col gap-2'>
        <label htmlFor='opening-text' className='text-2xl font-bold'>
          Opening text
        </label>
        <br />
        <textarea
          name='opening-text'
          id='opening-text'
          rows='6'
          className='w-full rounded-2xl border border-gray-300 p-1 text-xl'
        />
      </div>
      <div className='flex w-full flex-col gap-2'>
        <label htmlFor='release-date' className='text-2xl font-bold'>
          Release Date
        </label>
        <br />
        <input
          type='text'
          name='release-date'
          id='release-date'
          className='w-full rounded-2xl border border-gray-300 p-1 text-xl'
        />
      </div>
      <Button type='submit'>Add Movie</Button>
      {status}
    </form>
  )
}

function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={`rounded-full bg-violet-950 px-16 py-6 text-3xl text-white hover:bg-violet-900 ${props.className || ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

function MovieItem(props) {
  return (
    <Card className='flex w-[80%] flex-col items-center gap-8 bg-violet-950 p-16 text-white shadow-lg'>
      <h2 className='text-5xl font-bold text-yellow-400'>
        {props.movie.title}
      </h2>
      <p className='text-2xl'>{props.movie.openingText}</p>
    </Card>
  )
}

function MovieList(props) {
  return props.movies.map((x) => <MovieItem key={x.id} movie={x} />)
}

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

import { useState } from 'react'
import Button from './Button'

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

export default MovieForm

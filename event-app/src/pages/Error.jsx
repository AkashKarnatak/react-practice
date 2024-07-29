import { useRouteError } from 'react-router-dom'
import Nav from '../components/Nav'

const Error = () => {
  const error = useRouteError()
  let title = 'An expected error occurred while making request!'
  let message = error.data?.message || error.message

  if (error.status === 404) {
    title = '404 - Not found'
    message = 'Could not find resource or page'
  }

  return (
    <div className='min-h-svh bg-[#222] font-roboto text-white'>
      <Nav />
      <h2 className='mt-8 text-4xl font-bold text-center'>{title}</h2>
      <p className='text-2xl mt-8 text-red-400 text-center'>{message}</p>
    </div>
  )
}

export default Error

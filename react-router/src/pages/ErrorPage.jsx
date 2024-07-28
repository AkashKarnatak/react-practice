import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='pt-10 flex flex-col items-center gap-6'>
      <div className='text-4xl font-bold'>This page does not exist yet!</div>
      <Link to='..' className='hover:underline'>
        Go to home
      </Link>
    </div>
  )
}

export default ErrorPage

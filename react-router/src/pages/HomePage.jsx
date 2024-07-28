import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigator = useNavigate()

  const navigateHandler = () => {
    navigator('/products')
  }

  return (
    <div className='mt-16 flex flex-col items-center gap-6'>
      <div className='text-4xl font-bold'>My Home Page</div>
      <Link to='/products' className='hover:underline'>
        Go to products page
      </Link>
      <button
        type='button'
        onClick={navigateHandler}
        className='rounded-lg border border-gray-500 px-6 py-2 hover:bg-[#333]'
      >
        Navigate
      </button>
    </div>
  )
}

export default HomePage

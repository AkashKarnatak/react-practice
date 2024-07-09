import { useContext } from 'react'
import AuthContext from '../store/auth-context'
import Card from './Card'

function HomePage(props) {
  const authCtx = useContext(AuthContext)
  return (
    <Card className={props.className}>
      <div className='flex flex-col items-center justify-center gap-5 p-8'>
        <p className='text-3xl font-bold'>Welcome back!</p>
        <button
          type='button'
          className='rounded-3xl bg-violet-500 px-10 py-2 font-bold text-white disabled:bg-gray-300 disabled:text-gray-500'
          onClick={() => authCtx.onLogout()}
        >
          Logout
        </button>
      </div>
    </Card>
  )
}

export default HomePage

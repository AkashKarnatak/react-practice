import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import { authActions } from '../store/auth'

function Nav() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <div className='flex w-full justify-center bg-violet-800 text-white'>
      <div className='flex w-[min(90%,1600px)] items-center justify-between'>
        <h2 className='py-6 text-4xl font-bold'>Redux Auth</h2>
        {isLoggedIn && (
          <ul className='flex items-center gap-8'>
            <li className='text-xl'>My Products</li>
            <li className='text-xl'>My Sales</li>
            <li>
              <Button
                className='!bg-yellow-500 !text-black hover:!bg-yellow-600'
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Nav

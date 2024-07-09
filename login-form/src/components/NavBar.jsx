import { useContext } from 'react'
import AuthContext from '../store/auth-context'

function NavBar() {
  const authCtx = useContext(AuthContext)
  return (
    <div className='flex w-svw justify-between bg-violet-500 px-6 py-4 text-white'>
      <h1 className='text-3xl font-bold'>A Typical Page</h1>
      <ul
        className={`${authCtx.isLoggedIn ? 'flex' : 'hidden'} items-center gap-8 font-bold`}
      >
        <li className='cursor-pointer'>User</li>
        <li className='cursor-pointer'>Admin</li>
        <li
          className='cursor-pointer rounded-3xl bg-pink-400 px-5 py-[6px] shadow-[0_0_6px_0_rgba(0,0,0,0.2)]'
          onClick={() => authCtx.onLogout()}
        >
          Logout
        </li>
      </ul>
    </div>
  )
}

export default NavBar

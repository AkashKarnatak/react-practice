import { useNavigation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const navigation = useNavigation()
  return (
    <div className='flex flex-col w-full items-center'>
      <ul className='flex w-[min(1500px,90%)] gap-6 p-6 text-xl'>
        <li>
          <NavLink
            to=''
            className={({ isActive }) =>
              `hover:text-yellow-500 hover:underline active:text-yellow-500 active:underline ${isActive ? 'text-yellow-500 underline' : ''}`
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='events'
            className={({ isActive }) =>
              `hover:text-yellow-500 hover:underline active:text-yellow-500 active:underline ${isActive ? 'text-yellow-500 underline' : ''}`
            }
          >
            Events
          </NavLink>
        </li>
      </ul>
      {navigation.state === 'loading' && <p className='text-2xl'>Loading...</p>}
    </div>
  )
}

export default Nav

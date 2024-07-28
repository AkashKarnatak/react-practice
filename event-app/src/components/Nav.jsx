import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='flex justify-center gap-6 p-6 text-xl'>
      <li>
        <NavLink
          to=''
          className={({ isActive }) =>
            `hover:text-yellow-300 active:text-yellow-300 ${isActive ? 'text-yellow-300' : ''}`
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
            `hover:text-yellow-300 active:text-yellow-300 ${isActive ? 'text-yellow-300' : ''}`
          }
        >
          Events
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav

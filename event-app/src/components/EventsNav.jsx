import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <ul className='flex justify-center gap-6 p-6 text-xl'>
      <li>
        <NavLink
          to=''
          className={({ isActive }) =>
            `rounded-lg border border-gray-500 bg-gray-300 px-6 py-3 text-black hover:border-yellow-300 hover:bg-yellow-500 active:border-yellow-300 active:bg-yellow-500 ${isActive ? 'border-yellow-300 bg-yellow-500' : ''}`
          }
          end
        >
          All Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to='new'
          className={({ isActive }) =>
            `rounded-lg border border-gray-500 bg-gray-300 px-6 py-3 text-black hover:border-yellow-300 hover:bg-yellow-500 active:border-yellow-300 active:bg-yellow-500 ${isActive ? 'border-yellow-300 bg-yellow-500' : ''}`
          }
        >
          New Event
        </NavLink>
      </li>
    </ul>
  )
}

export default Nav

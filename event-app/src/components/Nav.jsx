import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center w-full'>
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
    </div>
  )
}

export default Nav

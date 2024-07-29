import { useNavigation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import NewsLetterForm from './NewsLetter'

const Nav = () => {
  const navigation = useNavigation()
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='flex justify-between w-[min(1500px,90%)] items-center'>
        <ul className='flex gap-6 p-6 text-xl'>
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
          <li>
            <NavLink
              to='newsletter'
              className={({ isActive }) =>
                `hover:text-yellow-500 hover:underline active:text-yellow-500 active:underline ${isActive ? 'text-yellow-500 underline' : ''}`
              }
            >
              Newsletter
            </NavLink>
          </li>
        </ul>
        <NewsLetterForm />
      </div>
      {navigation.state === 'loading' && <p className='text-2xl'>Loading...</p>}
    </div>
  )
}

export default Nav

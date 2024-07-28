import { Outlet } from 'react-router-dom'
import Nav from './Nav'

const Root = () => {
  return (
    <div className='min-h-svh bg-[#222] text-white font-roboto'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Root

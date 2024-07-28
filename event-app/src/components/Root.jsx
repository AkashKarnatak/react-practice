import { Outlet } from "react-router-dom"
import Nav from "./Nav"

const Root = () => {
  return (
    <div className='bg-[#222] min-h-svh text-white'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Root

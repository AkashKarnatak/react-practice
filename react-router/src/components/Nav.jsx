import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <ul className='flex justify-center gap-8 p-4'>
      <li><NavLink to="/" className='hover:text-yellow-300'>Home</NavLink></li>
      <li><NavLink to="/products" className='hover:text-yellow-300'>Products</NavLink></li>
    </ul>
  )
}

export default Nav

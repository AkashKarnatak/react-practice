import CartButton from './CartButton'

function Nav() {
  return (
    <div className='sticky top-0 z-20 w-full bg-orange-900'>
      <div className='mx-auto flex max-w-[1600px] items-center justify-between p-6 text-white'>
        <h1 className='text-4xl font-bold'>ReactMeals</h1>
        <CartButton />
      </div>
    </div>
  )
}

export default Nav

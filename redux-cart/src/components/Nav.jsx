import CartButton from './CartButton'

function Nav() {
  return (
    <div className='flex w-full justify-center bg-[#111] text-white'>
      <div className='flex w-[min(90%,1600px)] items-center justify-between'>
        <h2 className='py-6 text-4xl font-bold'>Redux Auth</h2>
        <CartButton />
      </div>
    </div>
  )
}

export default Nav

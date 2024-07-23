function Card(props) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-[0_0_20px_10px_rgba(0,0,0,0.3)] ${props.className || ''}`}
    >
      {props.children}
    </div>
  )
}

function Section(props) {
  return <Card className='m-12 w-[min(90%,800px)] p-4'>{props.children}</Card>
}

function Cart(props) {
  return (
    <div className='absolute flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.8)]'>
      <div className='mt-16 flex w-[min(90%,700px)] flex-col gap-8 rounded-lg bg-[#111] p-8 text-white'>
        <h2 className='text-4xl font-bold'>Your Shopping Cart</h2>
        <div className='flex flex-col gap-8 bg-[#333] p-6'>
          <div className='flex items-center justify-between'>
            <p className='text-3xl font-bold'>Testing</p>
            <p className='text-2xl'>
              <span className='font-bold'>$18.00</span>
              <span className='text-xl italic'>($6.00/item)</span>
            </p>
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-2xl font-bold'>x3</p>
            <div className='flex gap-2'>
              <button
                type='button'
                className='rounded-lg border border-gray-500 px-6 py-2 hover:border-cyan-800 hover:bg-[#222]'
              >
                -
              </button>
              <button
                type='button'
                className='rounded-lg border border-gray-500 px-6 py-2 hover:border-cyan-800 hover:bg-[#222]'
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CartButton() {
  return (
    <button
      type='button'
      className='flex items-center gap-6 rounded-lg border border-teal-500 px-10 py-2 text-teal-500 hover:border-2 hover:border-cyan-700 hover:bg-cyan-400 hover:text-white'
    >
      <span className='text-xl'>My Cart</span>
      <span className='rounded-full bg-teal-500 px-[28px] py-1 text-xl text-black'>
        {1}
      </span>
    </button>
  )
}

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

function Products() {
  return (
    <div className='flex flex-col items-end gap-4 bg-white p-4'>
      <div className='flex w-full justify-between'>
        <h2 className='text-3xl font-bold'>Test</h2>
        <p className='rounded-full bg-black px-8 py-2 text-2xl font-bold text-white'>
          $6.00
        </p>
      </div>
      <div className='w-full'>
        <p className='text-xl'>This is the first product - amazing!</p>
      </div>
      <button
        type='button'
        className='rounded-lg border border-cyan-600 px-6 py-2 text-2xl text-cyan-600 hover:border-2 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white'
      >
        Add to Cart
      </button>
    </div>
  )
}

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center bg-[#333]'>
      <Nav />
      <h2 className='mt-8 text-3xl font-bold text-white'>
        BUY YOUR FAVORITE PRODUCTS
      </h2>
      <Section>
        <Products />
      </Section>
    </div>
  )
}

export default App

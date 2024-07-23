import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalActions } from './store/modal'
import { cartActions } from './store/cart'

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
  return <Card className='m-6 w-[min(90%,800px)] p-4'>{props.children}</Card>
}

function CartItem({ id, name, price, quantity }) {
  const dispatch = useDispatch()

  const cartItemIncrementHandler = () => {
    dispatch(cartActions.updateCartItems({ id, items: 1 }))
  }

  const cartItemDecrementHandler = () => {
    dispatch(cartActions.updateCartItems({ id, items: -1 }))
  }
  return (
    <div className='flex w-full flex-col gap-8 bg-[#333] p-6'>
      <div className='flex items-center justify-between'>
        <p className='text-3xl font-bold'>{name}</p>
        <p className='text-2xl'>
          <span className='font-bold'>
            ${parseFloat(price * quantity).toFixed(2)}
          </span>
          <span className='text-xl italic'>
            (${parseFloat(price).toFixed(2)}/item)
          </span>
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-2xl font-bold'>x{quantity}</p>
        <div className='flex gap-2'>
          <button
            type='button'
            className='rounded-lg border border-gray-500 px-6 py-2 hover:border-cyan-800 hover:bg-[#222]'
            onClick={cartItemDecrementHandler}
          >
            -
          </button>
          <button
            type='button'
            className='rounded-lg border border-gray-500 px-6 py-2 hover:border-cyan-800 hover:bg-[#222]'
            onClick={cartItemIncrementHandler}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const products = useSelector((state) => state.product.products)
  const filteredCart = Object.entries(cart).filter(
    ([_, quantity]) => quantity > 0,
  )
  console.log(filteredCart.length)

  const hideModalHandler = (e) => {
    if (e.target !== e.currentTarget) return
    dispatch(modalActions.hide())
  }

  return (
    <div
      className='absolute flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.8)]'
      onClick={hideModalHandler}
    >
      <div className='mt-16 flex w-[min(90%,700px)] animate-slide-in flex-col items-end gap-8 rounded-lg bg-[#111] p-8 text-white'>
        <h2 className='w-full text-4xl font-bold'>Your Shopping Cart</h2>
        {filteredCart.map(([id, quantity]) => (
          <CartItem
            key={id}
            id={id}
            name={products.find((x) => +x.id === +id).name}
            price={products.find((x) => +x.id === +id).price}
            quantity={quantity}
          />
        ))}
        <button
          type='button'
          className='rounded-full border border-cyan-600 px-8 py-2 hover:animate-pop-out hover:border-2 hover:bg-cyan-400'
          onClick={hideModalHandler}
        >
          Close
        </button>
      </div>
    </div>
  )
}

function CartButton() {
  const dispatch = useDispatch()
  const cartIsBumping = useSelector((state) => state.cart.isBumping)
  const cart = useSelector((state) => state.cart.cart)
  const cartNumItems = Object.values(cart).reduce((acc, x) => acc + x, 0)

  useEffect(() => {
    if (cartNumItems === 0) return
    dispatch(cartActions.startBumping())
    const id = setTimeout(() => {
      dispatch(cartActions.stopBumping())
    }, 200)
    return () => {
      clearTimeout(id)
    }
  }, [cartNumItems, dispatch])

  const showCartHandler = () => {
    dispatch(modalActions.show())
  }

  return (
    <button
      type='button'
      className={`flex items-center gap-6 rounded-lg border border-teal-500 px-10 py-2 text-teal-500 ${cartIsBumping ? 'animate-bump' : ''} hover:animate-pop-out hover:border-2 hover:border-cyan-700 hover:bg-cyan-400 hover:text-white`}
      onClick={showCartHandler}
    >
      <span className='text-xl'>My Cart</span>
      <span className='rounded-full bg-teal-500 px-[28px] py-1 text-xl text-black'>
        {cartNumItems}
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

function Product({ id, name, desc, price }) {
  const dispatch = useDispatch()

  const addItemHandler = () => {
    dispatch(cartActions.updateCartItems({ id, items: 1 }))
  }

  return (
    <div className='flex flex-col items-end gap-4 bg-white p-4'>
      <div className='flex w-full justify-between'>
        <h2 className='text-3xl font-bold'>{name}</h2>
        <p className='rounded-full bg-black px-8 py-2 text-2xl font-bold text-white'>
          ${parseFloat(price).toFixed(2)}
        </p>
      </div>
      <div className='w-full'>
        <p className='text-xl'>{desc}</p>
      </div>
      <button
        type='button'
        className='rounded-lg border border-cyan-600 px-6 py-2 text-2xl text-cyan-600 hover:animate-pop-out hover:border-2 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white'
        onClick={addItemHandler}
      >
        Add to Cart
      </button>
    </div>
  )
}

function App() {
  const modalIsVisible = useSelector((state) => state.modal.isVisible)
  const products = useSelector((state) => state.product.products)

  return (
    <div className='flex min-h-svh flex-col items-center bg-[#333]'>
      <Nav />
      {modalIsVisible && <Cart />}
      <h2 className='my-12 text-3xl font-bold text-white'>
        BUY YOUR FAVORITE PRODUCTS
      </h2>
      {products.map((x) => (
        <Section key={x.id}>
          <Product id={x.id} name={x.name} desc={x.desc} price={x.price} />
        </Section>
      ))}
    </div>
  )
}

export default App

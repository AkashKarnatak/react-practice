import { useState } from 'react'
import bgImg from './assets/restaurant.webp'
import { useContext } from 'react'
import { CartContext } from './store/cart-context'

const round = (x, y) => {
  return Math.round((x + Number.EPSILON) * 10 ** y) / 10 ** y
}

function Card(props) {
  return (
    <div
      className={`rounded-3xl shadow-[0_5px_10px_-5px_rgba(0,0,0,1)] ${props.className}`}
    >
      {props.children}
    </div>
  )
}

function CartButton() {
  const cartContext = useContext(CartContext)

  return (
    <div
      className='cursor-pointer rounded-full bg-orange-950 px-12 py-4 text-xl font-bold'
      onClick={cartContext.showModal}
    >
      <i className='fa-solid fa-cart-shopping'></i>
      <span className='ml-4'>Your Cart</span>
      <span className='ml-4 rounded-full bg-orange-700 px-5 py-2'>
        {Object.values(cartContext.cart).reduce((acc, x) => acc + x, 0)}
      </span>
    </div>
  )
}

function Nav() {
  return (
    <div className='sticky top-0 w-full bg-orange-900'>
      <div className='mx-auto flex max-w-[1600px] items-center justify-between p-6 text-white'>
        <h1 className='text-4xl font-bold'>ReactMeals</h1>
        <CartButton />
      </div>
    </div>
  )
}

function OrderItem(props) {
  const cartContext = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const quantityChangeHandler = (e) => {
    if (Number.isNaN(+e.target.value) || +e.target.value < 0) return
    setQuantity(+e.target.value)
  }

  return (
    <>
      <div className='flex justify-between p-4 text-xl'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-bold'>{props.item.name}</h2>
          <p className='italic'>{props.item.desc}</p>
          <p className='text-2xl font-bold text-orange-800'>
            ${props.item.cost}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <h2 className='inline font-bold'>Amount</h2>
            <input
              className='w-16 rounded-lg border border-gray-300 px-2 py-[0.125rem]'
              type='number'
              value={quantity}
              onChange={quantityChangeHandler}
            />
          </div>
          <button
            className='rounded-full bg-orange-800 px-10 py-2 font-bold text-white transition-all hover:bg-orange-900'
            type='button'
            onClick={() => cartContext.onAdd(props.item.id, quantity)}
          >
            + Add
          </button>
        </div>
      </div>
      <hr className='mx-auto w-[97%]' />
    </>
  )
}

function Orders(props) {
  const cartContext = useContext(CartContext)

  return (
    <Card
      className={`flex w-full max-w-[1200px] flex-col bg-white px-5 py-8 ${props.className}`}
    >
      {cartContext.foodItems.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </Card>
  )
}

function CartItem(props) {
  const cartContext = useContext(CartContext)
  const decrementCartItem = () => {
    cartContext.onAdd(props.id, -1)
  }
  const incrementCartItem = () => {
    cartContext.onAdd(props.id, 1)
  }

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold'>{props.name}</h2>
          <div className='flex items-center'>
            <p className='mr-12 inline font-bold text-orange-800'>
              ${props.cost}
            </p>
            <div className='inline rounded-lg border border-gray-300 px-4 py-1 font-bold'>
              x {props.quantity}
            </div>
          </div>
        </div>
        <div className='flex gap-2'>
          <button
            type='button'
            className='rounded-lg border border-orange-800 px-5 text-2xl font-bold text-orange-800'
            onClick={decrementCartItem}
          >
            -
          </button>
          <button
            type='button'
            className='rounded-lg border border-orange-800 px-5 text-2xl font-bold text-orange-800'
            onClick={incrementCartItem}
          >
            +
          </button>
        </div>
      </div>
      <hr className='my-4 border-[1px] border-orange-800' />
    </>
  )
}

function Cart(props) {
  const cartContext = useContext(CartContext)
  const cart = Object.entries(cartContext.cart).filter(
    ([_, quantity]) => quantity > 0,
  )

  return (
    <div
      className={`fixed ${cartContext.isModalVisible ? 'flex' : 'hidden'} h-svh w-svw items-center justify-center bg-[rgba(0,0,0,0.5)]`}
      onClick={(e) => {
        if (e.target != e.currentTarget) return
        cartContext.hideModal()
      }}
    >
      <Card
        className={`flex w-full max-w-[800px] flex-col bg-white px-8 pb-6 pt-10 shadow-none ${props.className}`}
      >
        {cart.length === 0 && (
          <p className='text-3xl font-bold'>No items in cart</p>
        )}
        {cart.length !== 0 &&
          cart.map(([id, quantity]) => (
            <CartItem
              key={id}
              id={id}
              name={cartContext.foodItems[id - 1].name}
              cost={cartContext.foodItems[id - 1].cost}
              quantity={quantity}
            />
          ))}
        {cart.length !== 0 && (
          <div className='flex justify-between text-3xl font-bold'>
            <h2>Total Amount</h2>
            <p>
              $
              {round(
                cart
                  .map(
                    ([id, quantity]) =>
                      cartContext.foodItems[id - 1].cost * quantity,
                  )
                  .reduce((acc, x) => acc + x, 0),
                2,
              )}
            </p>
          </div>
        )}
        <div className='mt-4 flex justify-end gap-4'>
          <button
            type='button'
            className={`w-28 rounded-full border border-orange-800 py-2 ${cart.length === 0 ? 'bg-orange-800 text-white' : 'text-orange-800'}`}
            onClick={cartContext.hideModal}
          >
            Close
          </button>
          {cart.length !== 0 && (
            <button
              type='button'
              className='w-28 rounded-full border border-orange-800 bg-orange-800 py-2 text-white'
              onClick={() => console.log('Ordering...')}
            >
              Order
            </button>
          )}
        </div>
      </Card>
    </div>
  )
}

function App() {
  return (
    <div className='box-border flex min-h-svh flex-col items-center bg-[#222] font-roboto'>
      <Nav />
      <Card className='mt-40 flex w-fit max-w-[850px] flex-col items-center gap-6 bg-[#333] p-8 text-center text-white'>
        <h1 className='mb-4 text-[2.5rem] font-bold'>
          Delicious food, Delivered to you
        </h1>
        <p className='text-xl'>
          Choose your favorite meal from our broad selection of available meals
          or enjoy delicious lunch or dinner at home.
        </p>
        <p className='text-xl'>
          All our meals are cooked with high quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
      <Orders className='my-12 box-border' />
      <Cart />
    </div>
  )
}

export default App

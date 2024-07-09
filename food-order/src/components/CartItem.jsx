import { useContext } from 'react'
import { CartContext } from '../store/cart-context'

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
            className='rounded-lg border border-orange-800 px-5 text-2xl font-bold text-orange-800 hover:bg-orange-800 hover:text-white'
            onClick={decrementCartItem}
          >
            -
          </button>
          <button
            type='button'
            className='rounded-lg border border-orange-800 px-5 text-2xl font-bold text-orange-800 hover:bg-orange-800 hover:text-white'
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

export default CartItem

import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart'

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

export default CartItem

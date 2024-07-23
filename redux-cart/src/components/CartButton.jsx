import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { cartActions } from '../store/cart'
import { modalActions } from '../store/modal'

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

export default CartButton

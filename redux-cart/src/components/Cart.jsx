import { useSelector, useDispatch } from 'react-redux'
import { modalActions } from '../store/modal'
import CartItem from './CartItem'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const products = useSelector((state) => state.product.products)
  const filteredCart = Object.entries(cart).filter(
    ([_, quantity]) => quantity > 0,
  )

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

export default Cart

import { useState, useContext, useEffect } from 'react'
import { CartContext } from '../store/cart-context'

function CartButton() {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false)
  const cartContext = useContext(CartContext)

  useEffect(() => {
    if (Object.values(cartContext.cart).length === 0) return
    console.log('hello')
    setIsButtonAnimated(true)

    const id = setTimeout(() => {
      setIsButtonAnimated(false)
    }, 300)

    return () => {
      clearTimeout(id)
    }
  }, [cartContext.cart])

  return (
    <div
      className={`cursor-pointer rounded-full bg-orange-950 px-12 py-4 text-xl font-bold ${isButtonAnimated ? 'animate-bump' : ''}`}
      id='hello'
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

export default CartButton

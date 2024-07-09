import { useContext } from 'react'
import { CartContext } from '../store/cart-context'
import Card from './Card'
import CartItem from './CartItem'

const round = (x, y) => {
  return Math.round((x + Number.EPSILON) * 10 ** y) / 10 ** y
}

function Cart(props) {
  const cartContext = useContext(CartContext)
  const cart = Object.entries(cartContext.cart).filter(
    ([_, quantity]) => quantity > 0,
  )

  return (
    <div
      className={`fixed ${cartContext.isModalVisible ? 'flex' : 'hidden'} z-40 h-svh w-svw items-center justify-center bg-[rgba(0,0,0,0.7)]`}
      onClick={(e) => {
        if (e.target != e.currentTarget) return
        cartContext.hideModal()
      }}
    >
      <Card
        className={`flex w-full max-w-[800px] animate-modal-appear flex-col bg-white px-8 pb-6 pt-10 shadow-none ${props.className}`}
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
            className={`w-28 rounded-full border border-orange-800 py-2 ${cart.length === 0 ? 'bg-orange-800 text-white' : 'text-orange-800'} hover:bg-orange-900 hover:text-white`}
            onClick={cartContext.hideModal}
          >
            Close
          </button>
          {cart.length !== 0 && (
            <button
              type='button'
              className='w-28 rounded-full border border-orange-800 bg-orange-800 py-2 text-white hover:bg-orange-900'
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

export default Cart

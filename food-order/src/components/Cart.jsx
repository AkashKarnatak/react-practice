import { useState, useContext } from 'react'
import { CartContext } from '../store/cart-context'
import Card from './Card'
import CartItem from './CartItem'
import CheckoutForm from './CheckoutForm'
import Button from './Button'

const round = (x, y) => {
  return Math.round((x + Number.EPSILON) * 10 ** y) / 10 ** y
}

function Cart(props) {
  const cartContext = useContext(CartContext)
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const cart = Object.entries(cartContext.cart).filter(
    ([_, quantity]) => quantity > 0,
  )

  const discardCartHandler = () => {
    setIsCheckout(false)
  }

  const postOrderData = async (order) => {
    setIsSubmitting(true)
    setError('')
    try {
      const res = await fetch('http://localhost:8080/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      })
      if (!res.ok) {
        throw new Error('Something went wrong while submitting order data!')
      }
      setSubmitted(true)
      setIsCheckout(false)
      cartContext.clearCart()
    } catch (e) {
      setError(e.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const noItems = <p className='text-3xl font-bold'>No items in cart</p>

  const cartPreview = (
    <>
      {cart.map(([id, quantity]) => (
        <CartItem
          key={id}
          id={id}
          name={cartContext.foodItems[id - 1].name}
          cost={cartContext.foodItems[id - 1].cost}
          quantity={quantity}
        />
      ))}
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
    </>
  )

  const previewButtons = (
    <div className='mt-4 flex justify-end gap-4'>
      <Button
        primary={cart.length === 0}
        onClick={() => {
          cartContext.hideModal()
        }}
      >
        Close
      </Button>
      {cart.length !== 0 && (
        <Button primary={true} onClick={() => setIsCheckout(true)}>
          Checkout
        </Button>
      )}
    </div>
  )

  let content = (
    <>
      {!isCheckout && cart.length === 0 && noItems}
      {cart.length !== 0 && cartPreview}
      {!isCheckout && previewButtons}
      {isCheckout && (
        <CheckoutForm onDiscard={discardCartHandler} onSubmit={postOrderData} />
      )}
    </>
  )

  let status = ''
  if (isSubmitting) {
    status = 'Submitting...'
  } else if (error) {
    status = error
  } else if (submitted) {
    status = 'Order placed successfully!'
  }

  if (isSubmitting || error || submitted) {
    content = (
      <>
        <p className={`text-2xl ${error ? 'text-red-500' : ''}`}>
          {status}
        </p>
        <div className='mt-4 flex justify-end gap-4'>
          <Button
            primary={true}
            onClick={() => {
              cartContext.hideModal()
              setSubmitted(false)
              setError('')
            }}
          >
            Close
          </Button>
        </div>
      </>
    )
  }

  return (
    <div
      className={`fixed ${cartContext.isModalVisible ? 'flex' : 'hidden'} z-40 h-svh w-svw items-center justify-center bg-[rgba(0,0,0,0.7)]`}
      onClick={(e) => {
        if (e.target != e.currentTarget) return
        cartContext.hideModal()
        setSubmitted(false)
        setError('')
      }}
    >
      <Card
        className={`flex w-full max-w-[800px] animate-modal-appear flex-col bg-white px-8 pb-6 pt-10 shadow-none ${props.className}`}
      >
        {content}
      </Card>
    </div>
  )
}

export default Cart

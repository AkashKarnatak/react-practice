import { useContext } from 'react'
import { CartContext } from '../store/cart-context'
import Card from './Card'
import OrderItem from './OrderItem'

function Orders(props) {
  const cartContext = useContext(CartContext)

  return (
    <Card
      className={`flex w-[90%] max-w-[1200px] flex-col bg-white px-5 py-8 ${props.className} animate-meals-appear`}
    >
      {cartContext.foodItems.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </Card>
  )
}

export default Orders

import { useContext } from 'react'
import { CartContext } from '../store/cart-context'
import Card from './Card'
import MealItem from './MealItem'

function Meals(props) {
  const cartContext = useContext(CartContext)

  return (
    <Card
      className={`flex w-[90%] max-w-[1200px] flex-col bg-white px-5 py-8 ${props.className} animate-meals-appear`}
    >
      {cartContext.foodItems.map((item) => (
        <MealItem key={item.id} item={item} />
      ))}
    </Card>
  )
}

export default Meals

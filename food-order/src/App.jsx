import Card from './components/Card'
import Orders from './components/Orders'
import Cart from './components/Cart'
import Nav from './components/Nav'
import bgImg from './assets/restaurant.webp'
import { useEffect } from 'react'
import foodItems from './assets/foodItems'
import { useContext } from 'react'
import { CartContext } from './store/cart-context'

function App() {
  const cartContext = useContext(CartContext)
  useEffect(() => {
    // fetch food items list
    cartContext.updateFoodItems(foodItems)
  }, [ cartContext ])

  return (
    <div className='box-border flex min-h-svh w-full flex-col items-center bg-[#222] font-roboto'>
      <Nav />
      <div className='box-content h-[25rem] w-full overflow-hidden'>
        <img
          src={bgImg}
          alt='background restaurant image'
          className='h-[28rem] w-[120%] max-w-none -translate-x-16 -translate-y-24 -rotate-[4deg] object-cover'
        />
      </div>
      <Card className='z-10 -mt-52 flex w-[90%] max-w-[850px] flex-col items-center gap-6 bg-[#333] p-8 text-center text-white'>
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

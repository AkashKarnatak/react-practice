import Card from './components/Card'
import Meals from './components/Meals'
import Cart from './components/Cart'
import Nav from './components/Nav'
import bgImg from './assets/restaurant.webp'
import { useState, useEffect, useContext } from 'react'
import { CartContext } from './store/cart-context'

function App() {
  const cartContext = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const { updateFoodItems } = cartContext
  useEffect(() => {
    setIsLoading(true)
    setError('')
    // fetch food items list
    ;(async () => {
      try {
        const res = await fetch('http://localhost:8080/api/meals')
        if (!res.ok) {
          throw new Error('Something went wrong!')
        }
        const data = await res.json()
        updateFoodItems(data.meals)
      } catch (e) {
        console.error('Something went wrong\n', e.message)
        setError(e.message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [updateFoodItems])

  let content = <Meals className='my-12 box-border' />

  if (isLoading) {
    content = <p className='mt-12 text-2xl text-white'>Loading...</p>
  } else if (error) {
    content = (
      <p className='mt-12 text-2xl text-red-500'>Something went wrong!</p>
    )
  }

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
      {content}
      <Cart />
    </div>
  )
}

export default App

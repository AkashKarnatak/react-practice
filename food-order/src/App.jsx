import Card from './components/Card'
import Orders from './components/Orders'
import Cart from './components/Cart'
import Nav from './components/Nav'

function App() {
  return (
    <div className='box-border flex min-h-svh flex-col items-center bg-[#222] font-roboto'>
      <Nav />
      <Card className='mt-40 flex w-fit max-w-[850px] flex-col items-center gap-6 bg-[#333] p-8 text-center text-white'>
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

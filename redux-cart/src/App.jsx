import { useSelector } from 'react-redux'
import Nav from './components/Nav'
import Cart from './components/Cart'
import Section from './components/Section'
import Product from './components/Product'

function App() {
  const modalIsVisible = useSelector((state) => state.modal.isVisible)
  const products = useSelector((state) => state.product.products)

  return (
    <div className='flex min-h-svh flex-col items-center bg-[#333]'>
      <Nav />
      {modalIsVisible && <Cart />}
      <h2 className='my-12 text-3xl font-bold text-white'>
        BUY YOUR FAVORITE PRODUCTS
      </h2>
      {products.map((x) => (
        <Section key={x.id}>
          <Product id={x.id} name={x.name} desc={x.desc} price={x.price} />
        </Section>
      ))}
    </div>
  )
}

export default App

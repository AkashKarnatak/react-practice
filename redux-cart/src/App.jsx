import { useSelector, useDispatch } from 'react-redux'
import Nav from './components/Nav'
import Cart from './components/Cart'
import Section from './components/Section'
import Product from './components/Product'
import { fetchProductData } from './store/product'
import { useEffect } from 'react'
import Status from './components/Status'

function App() {
  const dispatch = useDispatch()
  const modalIsVisible = useSelector((state) => state.modal.isVisible)
  const products = useSelector((state) => state.product.products)
  const status = useSelector((state) => state.status.status)
  console.log(status.showStatus)

  useEffect(() => {
    dispatch(fetchProductData())
  }, [dispatch])

  let content = <p className='text-2xl text-white'>No products found</p>

  if (products.length > 0) {
    content = products.map((x) => (
      <Section key={x.id} className='animate-slide-up'>
        <Product id={x.id} name={x.name} desc={x.desc} price={x.price} />
      </Section>
    ))
  }

  return (
    <div className='flex min-h-svh flex-col items-center bg-[#333]'>
      <Nav />
      <Status
        title={status.title}
        message={status.message}
        status={status.status}
        show={status.showStatus}
      />
      {modalIsVisible && <Cart />}
      <h2 className='my-12 text-3xl font-bold text-white'>
        BUY YOUR FAVORITE PRODUCTS
      </h2>
      {content}
    </div>
  )
}

export default App

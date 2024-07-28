import { Link } from 'react-router-dom'

const ProductsPage = () => {
  const PRODUCTS = [
    { id: 1, link: 'p1', title: 'Product 1' },
    { id: 2, link: 'p2', title: 'Product 2' },
    { id: 3, link: 'p3', title: 'Product 3' },
  ]
  return (
    <div className='mt-16 flex flex-col items-center gap-6'>
      <div className='text-4xl font-bold'>Products Page</div>
      {PRODUCTS.map((x) => (
        <Link key={x.id} to={x.link} className='hover:underline'>
          {x.title}
        </Link>
      ))}
      <Link to='..' className='hover:underline'>
        Back
      </Link>
    </div>
  )
}

export default ProductsPage

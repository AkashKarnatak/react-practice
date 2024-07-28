import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const params = useParams()

  return (
    <div className='mt-16 flex flex-col items-center gap-6'>
      <div className='text-4xl font-bold'>Product Page</div>
      <p className='text-xl'>This is product {params.id}</p>
      <Link to='..' className='hover:underline' relative='path'>
        Back
      </Link>
    </div>
  )
}

export default ProductPage

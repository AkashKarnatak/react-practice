import { useDispatch } from 'react-redux'
import { cartActions } from '../store/cart'

function Product({ id, name, desc, price }) {
  const dispatch = useDispatch()

  const addItemHandler = () => {
    dispatch(cartActions.updateCartItems({ id, items: 1 }))
  }

  return (
    <div className='flex flex-col items-end gap-4 bg-white p-4'>
      <div className='flex w-full justify-between'>
        <h2 className='text-3xl font-bold'>{name}</h2>
        <p className='rounded-full bg-black px-8 py-2 text-2xl font-bold text-white'>
          ${parseFloat(price).toFixed(2)}
        </p>
      </div>
      <div className='w-full'>
        <p className='text-xl'>{desc}</p>
      </div>
      <button
        type='button'
        className='rounded-lg border border-cyan-600 px-6 py-2 text-2xl text-cyan-600 hover:animate-pop-out hover:border-2 hover:border-cyan-500 hover:bg-cyan-600 hover:text-white'
        onClick={addItemHandler}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Product

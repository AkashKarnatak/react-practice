import { useState, useContext } from 'react'
import { CartContext } from '../store/cart-context'

function MealItem(props) {
  const cartContext = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const quantityChangeHandler = (e) => {
    if (
      Number.isNaN(+e.target.value) ||
      +e.target.value <= 0 ||
      +e.target.value > 10
    )
      return
    setQuantity(+e.target.value)
  }

  return (
    <>
      <div className='flex justify-between p-4 text-xl'>
        <div className='flex flex-col gap-1'>
          <h2 className='text-2xl font-bold'>{props.item.name}</h2>
          <p className='italic'>{props.item.desc}</p>
          <p className='text-2xl font-bold text-orange-800'>
            ${props.item.cost}
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-4'>
            <h2 className='inline font-bold'>Amount</h2>
            <input
              className='w-16 rounded-lg border border-gray-300 px-2 py-[0.125rem]'
              type='number'
              value={quantity}
              onChange={quantityChangeHandler}
            />
          </div>
          <button
            className='rounded-full bg-orange-800 px-10 py-2 font-bold text-white transition-all hover:bg-orange-900'
            type='button'
            onClick={() => cartContext.onAdd(props.item.id, quantity)}
          >
            + Add
          </button>
        </div>
      </div>
      <hr className='mx-auto w-[97%]' />
    </>
  )
}

export default MealItem

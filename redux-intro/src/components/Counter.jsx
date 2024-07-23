import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counter'
import Button from './Button'

function Counter() {
  const counter = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleHandler = () => {
    dispatch(counterActions.toggle())
  }

  return (
    <div className='flex flex-col items-center gap-8 p-4'>
      <h2 className='text-2xl font-bold'>REDUX COUNTER</h2>
      {showCounter && <p className='py-8 text-4xl font-bold'>{counter}</p>}
      <div className='flex justify-center gap-8'>
        <Button onClick={incrementHandler}>Increment</Button>
        <Button onClick={increaseHandler}>Increase by 5</Button>
        <Button onClick={decrementHandler}>Decrement</Button>
      </div>
      <div className='flex justify-center gap-8'>
        <Button onClick={toggleHandler}>Toggle counter</Button>
      </div>
    </div>
  )
}

export default Counter

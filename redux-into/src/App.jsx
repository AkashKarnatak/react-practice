import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './store/counter'

function Card(props) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-[0_0_20px_10px_rgba(0,0,0,0.5)] ${props.className || ''}`}
    >
      {props.children}
    </div>
  )
}

function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={`w-fit rounded-xl bg-violet-800 px-10 py-3 text-xl text-white hover:bg-violet-900 ${props.className || ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

function Section(props) {
  return (
    <Card className='m-12 w-[min(90%,800px)] p-8 pb-6'>{props.children}</Card>
  )
}

function LoginForm() {
  return (
    <form className='flex flex-col items-center gap-4'>
      <div className='flex w-full flex-col gap-1'>
        <label htmlFor='email' className='ml-1 text-xl font-bold'>
          Email
        </label>
        <br />
        <input
          type='email'
          id='email'
          name='email'
          className='rounded-lg border border-gray-500 p-2 text-xl'
        />
      </div>
      <div className='flex w-full flex-col gap-1'>
        <label htmlFor='password' className='ml-1 text-xl font-bold'>
          Password
        </label>
        <br />
        <input
          type='password'
          id='password'
          name='password'
          className='rounded-lg border border-gray-500 p-2 text-xl'
        />
      </div>
      <Button type='submit' className='mt-6'>
        Login
      </Button>
    </form>
  )
}

function UserProfile() {
  return (
    <div className='flex flex-col items-center gap-6 p-16'>
      <h2 className='text-4xl font-bold'>Welcome</h2>
      <p className='text-2xl'>How are you doing today?</p>
    </div>
  )
}

function Counter() {
  const counter = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)
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

function Nav() {
  return (
    <div className='flex w-full justify-center bg-violet-800 text-white'>
      <div className='flex w-[min(90%,1600px)] items-center justify-between'>
        <h2 className='py-6 text-4xl font-bold'>Redux Auth</h2>
        <ul className='flex items-center gap-8'>
          <li className='text-xl'>My Products</li>
          <li className='text-xl'>My Sales</li>
          <li>
            <Button className='!bg-yellow-500 !text-black hover:!bg-yellow-600'>
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center bg-[#222]'>
      <Nav />
      <Section>
        <LoginForm />
      </Section>
      <Section>
        <UserProfile />
      </Section>
      <Section>
        <Counter />
      </Section>
    </div>
  )
}

export default App

import { useContext } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createStore } from 'redux'

const initialState = { state: 0 }
function reducer(state, action) {
  if (action.type === 'change') {
    return { state: state.state + 1 }
  }
  return initialState
}

const store = createStore(reducer)

function Button({ children, onClick }) {
  return (
    <button
      className='rounded-xl border border-cyan-500 px-6 py-2 text-cyan-600 hover:bg-cyan-500 hover:text-white'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Component1() {
  const dispatch = useDispatch()

  console.log('component 1 rendered')
  return (
    <Button onClick={() => dispatch({ type: 'change' })}>Component 1</Button>
  )
}

function Component2() {
  console.log('component 2 rendered')
  return (
    <div className='flex gap-4 border border-orange-500 p-8'>
      <Button>Component 2</Button>
      <Component3 />
    </div>
  )
}

function Component3() {
  console.log('component 3 rendered')
  const state = useSelector((state) => state.state)
  return <Button>Component 3 - {state}</Button>
}

function Redux() {
  return (
    <div>
      <h2 className='text-4xl font-bold px-8 text-cyan-600'>Redux example</h2>
      <div className='flex gap-6 p-8'>
        <Provider store={store}>
          <Component1 />
          <Component2 />
        </Provider>
      </div>
      <p className='p-8 text-2xl text-black'>
        Only Component 3 will be re-rendered because its the only component
        using the state
      </p>
    </div>
  )
}

export default Redux

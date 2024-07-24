import { useContext } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createStore } from 'redux'

const initialState = { counter1: 0, counter2: 0, counter3: 0 }
function reducer(state, action) {
  if (action.type === 'updateCounter1') {
    return { ...state, counter1: state.counter1 + 1 }
  }
  if (action.type === 'updateCounter2') {
    return { ...state, counter2: state.counter2 + 1 }
  }
  if (action.type === 'updateCounter3') {
    return { ...state, counter3: state.counter3 + 1 }
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

function Wrapper({ children }) {
  console.log('wrapper rendered')
  return (
    <div className='flex gap-4 border border-orange-500 p-8'>{children}</div>
  )
}

// ------------ USING redux ----------------

function Counter1() {
  const dispatch = useDispatch()
  const counter1 = useSelector((state) => state.counter1)

  console.log('counter 1 rendered')
  return (
    <Button onClick={() => dispatch({ type: 'updateCounter1' })}>
      Counter 1 - {counter1}
    </Button>
  )
}

function Counter2() {
  const dispatch = useDispatch()
  const counter2 = useSelector((state) => state.counter2)

  console.log('counter 2 rendered')
  return (
    <Button onClick={() => dispatch({ type: 'updateCounter2' })}>
      Counter 2 - {counter2}
    </Button>
  )
}

function Counter3() {
  const dispatch = useDispatch()
  const counter3 = useSelector((state) => state.counter3)

  console.log('counter 3 rendered')
  return (
    <Button onClick={() => dispatch({ type: 'updateCounter3' })}>
      Counter 3 - {counter3}
    </Button>
  )
}

function Redux() {
  return (
    <div>
      <h2 className='px-8 text-4xl font-bold text-cyan-600'>Redux example</h2>
      <div className='flex gap-6 p-8'>
        <Provider store={store}>
          <Counter1 />
          <Wrapper>
            <Counter2 />
            <Counter3 />
          </Wrapper>
        </Provider>
      </div>
      <p className='p-8 text-2xl text-black'>
        Clicking on counter 3 will only re-render counter 3 component
      </p>
    </div>
  )
}

export default Redux

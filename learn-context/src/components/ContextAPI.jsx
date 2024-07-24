import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

const context = createContext()

function Provider({ children }) {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)

  console.log('provider rendered')

  return (
    <context.Provider
      value={{
        counter1,
        counter2,
        counter3,
        setCounter1,
        setCounter2,
        setCounter3,
      }}
    >
      {children}
    </context.Provider>
  )
}

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

// ------------ USING Context API ----------------

function Counter1() {
  const c = useContext(context)

  console.log('counter 1 rendered')
  return (
    <Button onClick={() => c.setCounter1((prev) => prev + 1)}>
      Counter 1 - {c.counter1}
    </Button>
  )
}

function Counter2() {
  const c = useContext(context)

  console.log('counter 2 rendered')
  return (
    <Button onClick={() => c.setCounter2((prev) => prev + 1)}>
      Counter 2 - {c.counter2}
    </Button>
  )
}

function Counter3() {
  const c = useContext(context)

  console.log('counter 3 rendered')
  return (
    <Button onClick={() => c.setCounter3((prev) => prev + 1)}>
      Counter 3 - {c.counter3}
    </Button>
  )
}

function ContextAPI() {
  return (
    <div>
      <h2 className='px-8 pt-8 text-4xl font-bold text-cyan-600'>
        Context API example
      </h2>
      <div className='flex gap-6 p-8'>
        <Provider>
          <Counter1 />
          <Wrapper>
            <Counter2 />
            <Counter3 />
          </Wrapper>
        </Provider>
      </div>
      <p className='p-8 text-2xl text-black'>
        Clicking on counter 3 will re-render all counters even if they do not
        use counter3 state
      </p>
    </div>
  )
}

export default ContextAPI

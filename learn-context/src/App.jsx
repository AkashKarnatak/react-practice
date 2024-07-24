import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

const context = createContext()

function Provider({ children }) {
  const [state, setState] = useState(0)

  console.log('provider rendered')

  return (
    <context.Provider value={{ state, setState }}>{children}</context.Provider>
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

function Component1() {
  const c = useContext(context)

  console.log('component 1 rendered')
  return (
    <Button onClick={() => c.setState((prev) => prev + 1)}>Component 1</Button>
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
  const c = useContext(context)
  console.log('component 3 rendered')
  return <Button>Component 3</Button>
}

function ContextAPI() {
  return (
    <>
      <div className='flex gap-6 p-8'>
        <Provider>
          <Component1 />
          <Component2 />
        </Provider>
      </div>
      <p className='p-8 text-2xl text-black'>
        Component 3 will be re-rendered because it is calling useContext even if
        it is not using any state
      </p>
    </>
  )
}

function App() {
  console.log('app rendered')

  return <ContextAPI />
}

export default App

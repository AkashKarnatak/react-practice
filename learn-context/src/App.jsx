import ContextAPI from './components/ContextAPI'
import Redux from './components/Redux'

function App() {
  console.log('app rendered')

  return (
    <div className='flex flex-col gap-12'>
      <ContextAPI />
      <hr />
      <Redux />
    </div>
  )
}

export default App

import useCounter from './hooks/use-counter'

function Card(props) {
  return (
    <div
      className={`rounded-2xl shadow-[0_0_20px_10px_rgba(0,0,0,0.3)] ${props.className || ''}`}
    >
      {props.children}
    </div>
  )
}

function ForwardCounter() {
  const counter = useCounter(1)

  return (
    <Card className='w-[min(90%,1000px)] bg-white p-8 text-center text-4xl'>
      {counter}
    </Card>
  )
}

function BackwardCounter() {
  const counter = useCounter(-1)

  return (
    <Card className='w-[min(90%,1000px)] bg-white p-8 text-center text-4xl'>
      {counter}
    </Card>
  )
}

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center gap-16 bg-[#222] p-16'>
      <ForwardCounter />
      <BackwardCounter />
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './assets/investment-calculator-logo.png'
import Calculator from './components/Calculator'
import Table from './components/Table'

function App() {
  const [calculatorState, setCalculatorState] = useState({
    currentSavings: '',
    yearlySavings: '',
    expectedInterest: '',
    investmentDuration: '',
  })

  const calculatorChangeHandler = (newState) => {
    setCalculatorState({
      currentSavings: newState.currentSavings,
      yearlySavings: newState.yearlySavings,
      expectedInterest: newState.expectedInterest,
      investmentDuration: newState.investmentDuration,
    })
  }

  return (
    <div className='flex flex-col w-full items-center bg-[radial-gradient(var(--tw-gradient-stops))] from-[#303b37] to-[#1a1f1d] min-h-svh font-quicksand'>
      <div className="flex flex-col items-center my-10 gap-4">
        <img src={logo} width={100} alt='logo' />
        <h1 className='text-white text-2xl font-bold my-3'>
          Investment Calculator
        </h1>
      </div>
      <Calculator onChange={calculatorChangeHandler} />
      {calculatorState.currentSavings === '' ? (
        <p className="text-white mt-10 text-sm">No investment calculated yet.</p>
      ) : (
        <Table calculatorState={calculatorState} className='mt-10' />
      )}
    </div>
  )
}

export default App

import { useRef } from 'react'

const Calculator = (props) => {
  const classes =
    'bg-gradient-to-b from-[#307e6c] to-[#2b996d] max-w-[520px] rounded-md ' +
    props.className

  const currentSavingsRef = useRef()
  const yearlySavingsRef = useRef()
  const expectedInterestRef = useRef()
  const investmentDurationRef = useRef()

  const calculateHandler = () => {
    props.onChange({
      currentSavings: currentSavingsRef.current.value,
      yearlySavings: yearlySavingsRef.current.value,
      expectedInterest: expectedInterestRef.current.value,
      investmentDuration: investmentDurationRef.current.value,
    })
  }

  const resetHandler = () => {
    currentSavingsRef.current.value = ''
    yearlySavingsRef.current.value = ''
    expectedInterestRef.current.value = ''
    investmentDurationRef.current.value = ''
    props.onChange({
      currentSavings: '',
      yearlySavings: '',
      expectedInterest: '',
      investmentDuration: '',
    })
  }

  return (
    <form className={classes + ' font-roboto-condensed'}>
      <div className='flex w-full flex-wrap justify-evenly py-6 gap-y-5'>
        <div>
          <label
            htmlFor='curr-saving'
            className='text-[0.5rem] font-bold text-white'
          >
            CURRENT SAVINGS ($)
          </label>
          <br />
          <input
            type='number'
            id='curr-sav'
            className='border border-gray-200 rounded-md px-3 py-2 bg-transparent text-white'
            ref={currentSavingsRef}
          />
        </div>
        <div>
          <label
            htmlFor='curr-saving'
            className='text-[0.5rem] font-bold text-white'
          >
            YEARLY SAVINGS ($)
          </label>
          <br />
          <input
            type='number'
            id='curr-sav'
            className='border border-gray-200 rounded-md px-3 py-2 bg-transparent text-white'
            ref={yearlySavingsRef}
          />
          <br />
        </div>
        <div>
          <label
            htmlFor='curr-saving'
            className='text-[0.5rem] font-bold text-white'
          >
            EXPECTED INTEREST (%, PER YEAR)
          </label>
          <br />
          <input
            type='number'
            id='curr-sav'
            className='border border-gray-200 rounded-md px-3 py-2 bg-transparent text-white'
            ref={expectedInterestRef}
          />
        </div>
        <div>
          <label
            htmlFor='curr-saving'
            className='text-[0.5rem] font-bold text-white'
          >
            INVESTMENT DURATION (YEARS)
          </label>
          <br />
          <input
            type='number'
            id='curr-sav'
            className='border border-gray-200 rounded-md px-3 py-2 bg-transparent text-white'
            ref={investmentDurationRef}
          />
        </div>
      </div>
      <div className='flex w-full justify-center text-sm items-center mt-4 mb-8 gap-4'>
        <button
          type='button'
          className='text-white px-4 py-2 rounded-md'
          onClick={resetHandler}
        >
          Reset
        </button>
        <button
          type='button'
          className='text-white px-4 py-2 rounded-md bg-[#093d31]'
          onClick={calculateHandler}
        >
          Calculate
        </button>
      </div>
    </form>
  )
}

export default Calculator

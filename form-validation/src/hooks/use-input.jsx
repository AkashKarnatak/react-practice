import { useState } from 'react'

function useInput(validationFn) {
  const [value, setValue] = useState('')
  const [valueIsTouched, setValueIsTouched] = useState(false)

  const valueIsValid = validationFn(value)
  const valueHasError = valueIsTouched && !valueIsValid

  const touchValue = () => {
    setValueIsTouched(true)
  }

  const valueChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const valueBlurHandler = () => {
    setValueIsTouched(true)
  }

  const valueReset = () => {
    setValue('')
    setValueIsTouched(false)
  }

  return {
    value,
    valueIsValid,
    valueHasError,
    touchValue,
    valueChangeHandler,
    valueBlurHandler,
    valueReset,
  }
}

export default useInput

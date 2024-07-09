import { useState, useEffect, useReducer, useContext } from 'react'
import AuthContext from '../store/auth-context'
import Card from './Card'

const FORM_ACTIONS = {
  EMAIL_INPUT: 0,
  PASSWORD_INPUT: 1,
  EMAIL_BLUR: 2,
  PASSWORD_BLUR: 3,
}

const formReducer = (state, action) => {
  if (action.type === FORM_ACTIONS.EMAIL_INPUT) {
    return {
      ...state,
      email: action.value.email,
      isEmailValid: action.value.email.trim().includes('@'),
    }
  }
  if (action.type === FORM_ACTIONS.PASSWORD_INPUT) {
    return {
      ...state,
      password: action.value.password,
      isPasswordValid: action.value.password.trim().length > 6,
    }
  }
  if (action.type === FORM_ACTIONS.EMAIL_BLUR) {
    return {
      ...state,
      isEmailValid: state.email.trim().includes('@'),
    }
  }
  if (action.type === FORM_ACTIONS.PASSWORD_BLUR) {
    return {
      ...state,
      isPasswordValid: state.password.trim().length > 6,
    }
  }
  return state
}

function LoginPage(props) {
  const authCtx = useContext(AuthContext)
  const [formState, dispatchForm] = useReducer(formReducer, {
    email: '',
    password: '',
    isEmailValid: undefined,
    isPasswordValid: undefined,
  })
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsFormValid(formState.isEmailValid && formState.isPasswordValid)
    }, 300)

    return () => {
      clearTimeout(identifier)
    }
  }, [formState.isEmailValid, formState.isPasswordValid])

  const emailHandler = (e) => {
    dispatchForm({
      type: FORM_ACTIONS.EMAIL_INPUT,
      value: { email: e.target.value },
    })
  }

  const passwordHandler = (e) => {
    dispatchForm({
      type: FORM_ACTIONS.PASSWORD_INPUT,
      value: { password: e.target.value },
    })
  }

  const emailBlurHandler = () => {
    dispatchForm({
      type: FORM_ACTIONS.EMAIL_BLUR,
    })
  }

  const passwordBlurHandler = () => {
    dispatchForm({
      type: FORM_ACTIONS.PASSWORD_BLUR,
    })
  }

  const loginHandler = (e) => {
    e.preventDefault()
    authCtx.onLogin()
    dispatchForm({ type: FORM_ACTIONS.EMAIL_INPUT, value: { email: '' } })
    dispatchForm({ type: FORM_ACTIONS.EMAIL_INPUT, value: { password: '' } })
  }

  const validInputClass =
    'focus:border focus:border-violet-500 focus:bg-violet-200'
  const invalidInputClass =
    'bg-red-200 border focus:border-red-500 focus:bg-red-200'
  return (
    <Card className={props.className}>
      <form
        className='flex flex-col items-center gap-4 px-4 py-6 pb-3'
        onSubmit={loginHandler}
      >
        <div className='flex w-full justify-between'>
          <label htmlFor='email' className='font-bold'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            value={formState.email}
            className={`w-3/4 rounded-md border border-gray-300 p-1 focus:outline-none ${formState.isEmailValid !== false ? validInputClass : invalidInputClass}`}
            onChange={emailHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div className='flex w-full justify-between'>
          <label htmlFor='password' className='font-bold'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            value={formState.password}
            className={`w-3/4 rounded-md border border-gray-300 p-1 focus:outline-none ${formState.isPasswordValid !== false ? validInputClass : invalidInputClass}`}
            onChange={passwordHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        <button
          type='submit'
          className='rounded-3xl bg-violet-500 px-10 py-2 font-bold text-white disabled:bg-gray-300 disabled:text-gray-500'
          disabled={!isFormValid}
        >
          Login
        </button>
      </form>
    </Card>
  )
}

export default LoginPage

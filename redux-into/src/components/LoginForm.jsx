import { useDispatch } from 'react-redux'
import Button from './Button'
import { authActions } from '../store/auth'

function LoginForm() {
  const dispatch = useDispatch()

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }

  return (
    <form className='flex flex-col items-center gap-4' onSubmit={loginHandler}>
      <div className='flex w-full flex-col gap-1'>
        <label htmlFor='email' className='ml-1 text-xl font-bold'>
          Email
        </label>
        <br />
        <input
          type='email'
          id='email'
          name='email'
          className='rounded-lg border border-gray-500 p-2 text-xl'
        />
      </div>
      <div className='flex w-full flex-col gap-1'>
        <label htmlFor='password' className='ml-1 text-xl font-bold'>
          Password
        </label>
        <br />
        <input
          type='password'
          id='password'
          name='password'
          className='rounded-lg border border-gray-500 p-2 text-xl'
        />
      </div>
      <Button type='submit' className='mt-6'>
        Login
      </Button>
    </form>
  )
}

export default LoginForm

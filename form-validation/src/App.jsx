import { useState } from 'react'

function Card(props) {
  return (
    <div
      className={`rounded-2xl shadow-[0_0_20px_10px_rgba(0,0,0,0.3)] ${props.className || ''}`}
    >
      {props.children}
    </div>
  )
}

function Section(props) {
  return (
    <Card className='w-[min(90%,1000px)] bg-white p-8'>{props.children}</Card>
  )
}

function Form() {
  const [name, setName] = useState('')
  const [nameIsTouched, setNameIsTouched] = useState(false)
  const [email, setEmail] = useState('')
  const [emailIsTouched, setEmailIsTouched] = useState(false)

  const nameIsValid = name.trim() !== ''
  const emailIsValid = email.trim().includes('@')

  const nameHasError = nameIsTouched && !nameIsValid
  const emailHasError = emailIsTouched && !emailIsValid

  const formHasError = nameHasError || emailHasError

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }

  const emailChangeHandler = (e) => {
    setEmail(e.target.value)
  }

  const nameBlurHandler = (e) => {
    setNameIsTouched(true)
  }

  const emailBlurHandler = (e) => {
    setEmailIsTouched(true)
  }

  const formSubmitHandler = (e) => {
    e.preventDefault()

    setNameIsTouched(true)
    setEmailIsTouched(true)

    if (!nameIsValid || !emailIsValid) return

    // reset everything
    setName('')
    setNameIsTouched(false)
    setEmail('')
    setEmailIsTouched(false)
  }

  return (
    <form className='flex flex-col gap-8' onSubmit={formSubmitHandler}>
      <div className='flex flex-col gap-2'>
        <label htmlFor='name' className='pl-2 text-xl font-bold'>
          Your Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          className={`rounded-lg border border-gray-300 p-2 text-xl outline-none focus:border-2 ${!nameHasError ? 'focus:border-violet-800 focus:bg-violet-300' : 'border-red-600 bg-red-300'}`}
        />
        {nameHasError && (
          <p className='text-xl text-red-600'>Name cannot be empty!</p>
        )}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email' className='pl-2 text-xl font-bold'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={`rounded-lg border border-gray-300 p-2 text-xl outline-none ${!emailHasError ? 'focus:border-violet-800 focus:bg-violet-300' : 'border-red-600 bg-red-300'}`}
        />
        {emailHasError && (
          <p className='text-xl text-red-600'>Email needs to contain an @</p>
        )}
      </div>
      <button
        type='submit'
        className='w-fit rounded-xl bg-violet-800 px-6 py-2 text-2xl text-white hover:bg-violet-900'
      >
        Submit
      </button>
    </form>
  )
}

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center bg-[#222] p-12'>
      <Section>
        <Form />
      </Section>
    </div>
  )
}

export default App

import useInput from './hooks/use-input'

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
  const {
    value: name,
    valueIsValid: nameIsValid,
    valueHasError: nameHasError,
    touchValue: touchName,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    valueReset: nameReset,
  } = useInput((name) => name.trim() !== '')
  const {
    value: email,
    valueIsValid: emailIsValid,
    valueHasError: emailHasError,
    touchValue: touchEmail,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    valueReset: emailReset,
  } = useInput((email) => email.trim().includes('@'))

  const formIsValid = nameIsValid && emailIsValid

  const formSubmitHandler = (e) => {
    e.preventDefault()

    touchName()
    touchEmail()

    if (!formIsValid) return

    // reset everything
    nameReset()
    emailReset()
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
        className='w-fit rounded-xl bg-violet-800 px-6 py-2 text-2xl text-white hover:bg-violet-900 disabled:bg-gray-400 disabled:cursor-not-allowed'
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

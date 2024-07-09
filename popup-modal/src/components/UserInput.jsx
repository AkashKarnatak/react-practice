import { useRef } from "react"
import Card from "./Card"

const UserInput = (props) => {
  const usernameRef = useRef()
  const ageRef = useRef()

  const addUserHandler = () => {
    const username = usernameRef.current.value
    const age = ageRef.current.value
    if (username === '' || age === '' || Number.isNaN(+age)) {
      return props.onChange({
        error: true,
        errorMsg: 'Please enter a valid name and age (non-empty values).',
      })
    } else if (+age <= 0) {
      return props.onChange({
        error: true,
        errorMsg: 'Please enter a valid age (> 0).',
      })
    }
    props.onChange({
      error: false,
      username: usernameRef.current.value,
      age: ageRef.current.value,
    })
    usernameRef.current.value = ''
    ageRef.current.value = ''
  }

  const classes =
    'flex flex-col items-start max-w-[800px] w-full p-4 gap-4 ' +
    props.className
  return (
    <Card className={classes}>
      <div className='w-full box-border'>
        <label htmlFor='username' className='font-bold block mb-1'>
          Username
        </label>
        <input
          type='text'
          id='username'
          className='w-full border-2 p-1'
          ref={usernameRef}
        />
      </div>
      <div className='w-full'>
        <label htmlFor='age' className='font-bold block mb-1'>
          Age (Years)
        </label>
        <input
          type='number'
          id='age'
          className='w-full border-2 p-1'
          ref={ageRef}
        />
      </div>
      <button
        type='button'
        className='bg-violet-900 text-white px-4 py-2'
        onClick={addUserHandler}
      >
        Add User
      </button>
    </Card>
  )
}

export default UserInput

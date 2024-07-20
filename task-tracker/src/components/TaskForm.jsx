import { useRef, useContext } from 'react'
import TaskContext from '../store/task-request-handler'

function TaskForm() {
  const { postLoading, postError, postTaskHandler } = useContext(TaskContext)
  const inputRef = useRef()
  const formSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData.entries())
    await postTaskHandler(formObj.task)
    inputRef.current.value = ''
  }

  let status = ''

  if (postLoading) {
    status = <p className='text-2xl'>Sending...</p>
  } else if (postError) {
    status = <p className='text-2xl text-red-600'>{postError}</p>
  }

  return (
    <div className='flex flex-col gap-4 text-center'>
      <form
        className='flex w-full items-center gap-4'
        onSubmit={formSubmitHandler}
      >
        <input
          type='text'
          name='task'
          id='task'
          className='flex-grow border-b-[2px] border-[#222] p-2 text-2xl outline-none focus:border-b-[3px] focus:border-rose-900'
          ref={inputRef}
        />
        <button
          type='submit'
          className='rounded-full bg-rose-900 px-10 py-3 text-2xl text-white'
        >
          Add Task
        </button>
      </form>
      {status}
    </div>
  )
}

export default TaskForm

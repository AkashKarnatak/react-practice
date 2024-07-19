import { useState, useEffect, useContext, useCallback } from 'react'
import TaskContext from './store/task-request-handler'

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
    <Card className={`w-[min(90%,1200px)] bg-white ${props.className || ''}`}>
      {props.children}
    </Card>
  )
}

function TaskForm(props) {
  const { postLoading, postError, postTaskHandler } = useContext(TaskContext)
  const formSubmitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData.entries())
    await postTaskHandler(formObj.task)
    props.onAddTask()
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

function TaskItem(props) {
  return <p className='text-3xl font-bold'>{props.children}</p>
}

function Tasks() {
  const { tasks, fetchLoading, fetchError, fetchTasksHandler } = useContext(TaskContext)

  useEffect(() => {
    fetchTasksHandler()
  }, [fetchTasksHandler])

  let content = (
    <p className='text-center text-4xl font-bold'>
      No tasks found. Start adding some!
    </p>
  )

  if (fetchLoading) {
    content = <p className='text-center text-2xl font-bold'>Loading...</p>
  } else if (fetchError) {
    content = (
      <p className='text-center text-2xl font-bold text-red-600'>{fetchError}</p>
    )
  } else if (tasks.length > 0) {
    content = tasks.map((x) => <TaskItem key={x.id}>{x.task}</TaskItem>)
  }

  return <div className='flex flex-col gap-6'>{content}</div>
}

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center gap-8 bg-[#222] p-16'>
      <Section className='p-6'>
        <TaskForm />
      </Section>
      <Section className='p-12'>
        <Tasks />
      </Section>
    </div>
  )
}

export default App

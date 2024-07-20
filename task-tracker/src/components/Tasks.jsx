import { useContext, useEffect } from 'react'
import TaskContext from '../store/task-request-handler'
import TaskItem from './TaskItem'
import { Fragment } from 'react'

function Tasks() {
  const { tasks, fetchLoading, fetchError, fetchTasksHandler } =
    useContext(TaskContext)

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
      <p className='text-center text-2xl font-bold text-red-600'>
        {fetchError}
      </p>
    )
  } else if (tasks.length > 0) {
    content = tasks.map((x) => (
      <Fragment key={x.id}>
        <TaskItem>{x.task}</TaskItem>
        <hr />
      </Fragment>
    ))
  }

  return <div className='flex flex-col gap-6'>{content}</div>
}

export default Tasks

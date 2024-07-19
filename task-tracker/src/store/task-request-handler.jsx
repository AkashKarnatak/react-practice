import React from 'react'
import { useState, useCallback } from 'react'
import useRequest from '../hooks/use-request'

const TaskContext = React.createContext({
  tasks: [],
  fetchError: '',
  postError: '',
  fetchLoading: false,
  postLoading: false,
  fetchTasksHandler: async () => {},
  postTaskHandler: async (task) => {},
})

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  const {
    requestHandler: fetchTasksHandler,
    error: fetchError,
    isLoading: fetchLoading,
  } = useRequest(useCallback(async () => {
    const res = await fetch('http://localhost:8080/api/tasks')
    if (!res.ok) {
      throw new Error('Something went wrong while fetching tasks!')
    }
    const data = await res.json()
    setTasks(data)
  }, []))

  const {
    requestHandler: postTaskHandler,
    error: postError,
    isLoading: postLoading,
  } = useRequest(async (task) => {
    const res = await fetch('http://localhost:8080/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task,
      }),
    })
    if (!res.ok) {
      throw new Error('Something went wrong while posting new task!')
    }
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks]
      newTasks.push({ id: Math.random(), task })
      return newTasks
    })
  })

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchError,
        postError,
        fetchLoading,
        postLoading,
        fetchTasksHandler,
        postTaskHandler,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext

import React from 'react'
import { useState, useCallback } from 'react'

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
  console.log('something')
  const [tasks, setTasks] = useState([])
  const [fetchError, setFetchError] = useState('')
  const [postError, setPostError] = useState('')
  const [fetchLoading, setFetchLoading] = useState(false)
  const [postLoading, setPostLoading] = useState(false)

  const fetchTasksHandler = useCallback(async () => {
    setFetchLoading(true)
    setFetchError('')
    try {
      const res = await fetch('http://localhost:8080/api/tasks')
      if (!res.ok) {
        throw new Error('Something went wrong while fetching tasks!')
      }
      const data = await res.json()
      setTasks(data)
    } catch (e) {
      setFetchError(e.message)
    }
    setFetchLoading(false)
  }, [])

  const postTaskHandler = async (task) => {
    setPostLoading(true)
    setPostError('')
    try {
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
    } catch (e) {
      setPostError(e.message)
    }
    setPostLoading(false)
  }

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

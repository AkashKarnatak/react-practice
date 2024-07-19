import { useState, useCallback } from 'react'

function useRequest(requestFn) {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const requestHandler = useCallback(async (...args) => {
    setIsLoading(true)
    setError('')
    try {
      await requestFn(...args)
    } catch (e) {
      setError(e.message)
    }
    setIsLoading(false)
  }, [requestFn])

  return { requestHandler, error, isLoading }
}

export default useRequest

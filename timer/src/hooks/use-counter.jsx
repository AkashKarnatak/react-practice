import { useState, useEffect } from "react"

function useCounter(step) {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const id = setInterval(
      () =>
        setCounter((prev) => {
          return prev + step
        }),
      1000,
    )
    return () => clearInterval(id)
  }, [step])

  return counter
}

export default useCounter

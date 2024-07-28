import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigator = useNavigate()

  const navigateHandler = () => {
    navigator('/products')
  }

  return (
    <>
      <div>HomePage</div>
      <button type='button' onClick={navigateHandler}>Product page</button>
    </>
  )
}

export default HomePage

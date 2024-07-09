import { useContext } from 'react'
import AuthContext from './store/auth-context'
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <div className='flex flex-col items-center font-roboto'>
      <NavBar />
      {!authCtx.isLoggedIn && (
        <LoginPage className='mt-8 w-full max-w-[600px]' />
      )}
      {authCtx.isLoggedIn && <HomePage className='mt-8 w-full max-w-[600px]' />}
    </div>
  )
}

export default App

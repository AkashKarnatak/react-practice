import { useSelector } from 'react-redux'
import Nav from "./components/Nav"
import Section from "./components/Section"
import LoginForm from "./components/LoginForm"
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  return (
    <div className='flex min-h-svh flex-col items-center bg-[#222]'>
      <Nav />
      {!isLoggedIn && (
        <Section>
          <LoginForm />
        </Section>
      )}
      {isLoggedIn && (
        <Section>
          <UserProfile />
        </Section>
      )}
      <Section>
        <Counter />
      </Section>
    </div>
  )
}

export default App

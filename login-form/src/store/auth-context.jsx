import React from 'react'
import { useState, useEffect } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
})

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') !== 'true') return
    setIsLoggedIn(true)
  }, [])

  const loginHandler = () => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', 'true')
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext

import { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from './components/Modal'
import UserInput from './components/UserInput'
import UserData from './components/UserData'

function App() {
  const [users, setUsers] = useState([])
  const [modalState, setModalState] = useState({ visible: false, message: '' })

  const addUserHandler = ({ error, errorMsg, username, age }) => {
    if (error) {
      return setModalState({ visible: true, message: errorMsg })
    }
    setUsers((prevUsers) => {
      return [...prevUsers, { id: crypto.randomUUID(), username, age }]
    })
  }

  const modalChangeHandler = (value) => {
    setModalState({ visible: value, message: '' })
  }

  return (
    <div className='flex flex-col items-center bg-[#222] min-h-svh'>
      <UserInput className='my-8' onChange={addUserHandler} />
      <UserData className='my-2' users={users} />
      {ReactDOM.createPortal(
        <Modal value={modalState} onChange={modalChangeHandler} />,
        document.getElementById('modal'),
      )}
    </div>
  )
}

export default App

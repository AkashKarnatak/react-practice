import { useDispatch } from 'react-redux'
import { statusActions } from '../store/status'

function Status(props) {
  const dispatch = useDispatch()

  const closeHandler = () => {
    dispatch(
      statusActions.updateStatus({
        status: '',
        title: '',
        message: '',
        showStatus: false,
      }),
    )
  }

  let styles = 'bg-white border-gray-500 text-black'
  if (props.status === 'loading') {
    styles = 'bg-blue-400 border-blue-600 text-white'
  } else if (props.status === 'error') {
    styles = 'bg-red-400 border-red-600 text-white'
  } else if (props.status === 'success') {
    styles = 'bg-green-600 border-green-500 text-white'
  }

  return (
    <div
      className={`w-[min(400px,90svw)] border ${styles} ${props.show ? 'fixed' : 'hidden'} top-[50px] z-10 animate-slide-in rounded-lg px-8 py-6 pb-10 shadow-[0_0_20px_10px_rgba(0,0,0,0.3)]`}
    >
      <button
        className='z-100 absolute right-[20px] top-[15px] cursor-pointer'
        onClick={closeHandler}
      >
        ✕
      </button>
      <h2 className='mb-4 text-2xl font-bold'>{props.title}</h2>
      <p className='text-xl'>{props.message}</p>
    </div>
  )
}

export default Status

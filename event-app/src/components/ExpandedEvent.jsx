import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const ExpandedEvent = ({ event, onDelete, navigationState }) => {
  return (
    <div className='mt-16 flex flex-col items-center gap-8'>
      <img
        src={event.image}
        alt={event.title}
        width='50%'
        className='aspect-video object-cover'
      />
      <h2 className='text-4xl font-bold'>{event.title}</h2>
      <p className='text-xl italic'>{event.date}</p>
      <p className='text-xl'>{event.desc}</p>
      <div className='mt-5 flex gap-6'>
        <Link to='edit' className='underline'>
          Edit
        </Link>
        <button
          type='button'
          className='flex items-center gap-2 underline'
          onClick={onDelete}
          disabled={navigationState !== 'idle'}
        >
          <span>Delete</span>
          {navigationState === 'submitting' && (
            <Spinner className='inline-block w-[18px] border-[3px] border-transparent border-t-gray-500' />
          )}
        </button>
      </div>
    </div>
  )
}

export default ExpandedEvent

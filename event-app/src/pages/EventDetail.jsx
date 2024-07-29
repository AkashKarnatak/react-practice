import {
  useRouteLoaderData,
  useSubmit,
  useNavigation,
  json,
  redirect,
} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

const EventDetail = () => {
  const submit = useSubmit()
  const navigation = useNavigation()
  const data = useRouteLoaderData('event-loader')
  const event = data.event

  const deleteHandler = () => {
    submit(null, { method: 'DELETE' })
  }

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
          onClick={deleteHandler}
          disabled={navigation.state !== 'idle'}
        >
          <span>Delete</span>
          {navigation.state === 'submitting' && (
            <Spinner className='inline-block w-[18px] border-[3px] border-transparent border-t-gray-500' />
          )}
        </button>
      </div>
    </div>
  )
}

const eventLoader = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:8080/api/events/${params.id}`)
    if (!res.ok) {
      throw new Error('Something went wrong when fetching event data!')
    }
    return res
  } catch (e) {
    throw json({ message: e.message }, { status: 500 })
  }
}

const eventAction = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:8080/api/events/${params.id}`, {
      method: 'DELETE',
    })
    if (!res.ok) {
      throw new Error('Something went wrong when deleting event data!')
    }
    return redirect('..')
  } catch (e) {
    throw json({ message: e.message }, { status: 500 })
  }
}

EventDetail.loader = eventLoader
EventDetail.action = eventAction

export default EventDetail

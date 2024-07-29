import { useLoaderData, json } from 'react-router-dom'
import EventList from '../components/EventList'

const Events = () => {
  const data = useLoaderData()
  const events = data.events

  return (
    <div className='mt-16 flex flex-col items-center gap-6'>
      <div className='mb-8 text-4xl font-bold'>All Events</div>
      <EventList events={events} />
    </div>
  )
}

const eventsLoader = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/events')
    if (!res.ok) {
      throw new Error('Something went wrong fetching events data!')
    }
    return res
  } catch (e) {
    throw json({ message: e.message }, { status: 500 })
  }
}

Events.loader = eventsLoader

export default Events

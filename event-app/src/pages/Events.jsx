import { useLoaderData, json } from 'react-router-dom'
import EventList from '../components/EventList'

const EventsPage = () => {
  const data = useLoaderData()
  const events = data.events

  return (
    <div className='mt-16 flex flex-col items-center gap-6'>
      <div className='mb-8 text-4xl font-bold'>Events Page</div>
      <EventList events={events} />
    </div>
  )
}

const eventsLoader = async () => {
  let status = 500
  try {
    const res = await fetch('http://localhost:8080/api/events')
    if (!res.ok) {
      status = res.status
      throw new Error()
    }
    return res
  } catch (e) {
    return json(
      { message: 'Something went wrong fetching events data' },
      { status: 500 },
    )
  }
}

EventsPage.loader = eventsLoader

export default EventsPage

import {
  useRouteLoaderData,
  useSubmit,
  useNavigation,
  json,
  redirect,
  defer,
} from 'react-router-dom'
import EventList from '../components/EventList'
import { Await } from 'react-router-dom'
import { Suspense } from 'react'
import ExpandedEvent from '../components/ExpandedEvent'

const EventDetail = () => {
  const submit = useSubmit()
  const navigation = useNavigation()
  const { event, events } = useRouteLoaderData('event-loader')

  const deleteHandler = () => {
    submit(null, { method: 'DELETE' })
  }

  return (
    <>
      <Suspense
        fallback={<p className='py-8 text-center text-2xl'>Loading...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => (
            <ExpandedEvent
              event={loadedEvent}
              onDelete={deleteHandler}
              navigationState={navigation.state}
            />
          )}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p className='py-16 text-center text-2xl'>Loading...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => (
            <div className='mt-16 flex flex-col items-center gap-6'>
              <div className='mb-8 text-4xl font-bold'>All Events</div>
              <EventList events={loadedEvents} />
            </div>
          )}
        </Await>
      </Suspense>
    </>
  )
}

const eventLoader = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:8080/api/events/${params.id}`)
    if (!res.ok) {
      throw new Error('Something went wrong when fetching event data!')
    }
    const data = await res.json()
    return data.event
  } catch (e) {
    throw json({ message: e.message }, { status: 500 })
  }
}

const eventsLoader = async () => {
  try {
    const res = await fetch('http://localhost:8080/api/events')
    if (!res.ok) {
      throw new Error('Something went wrong fetching events data!')
    }
    const data = await res.json()
    return data.events
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

EventDetail.loader = async ({ params }) => {
  return defer({
    event: await eventLoader({ params }),
    events: eventsLoader(),
  })
}

EventDetail.action = eventAction

export default EventDetail

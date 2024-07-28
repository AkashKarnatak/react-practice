import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'

const EditEvent = () => {
  // TODO: fix date format
  const data = useRouteLoaderData('event-loader')
  const event = data.event
  return <EventForm event={event} />
}

export default EditEvent

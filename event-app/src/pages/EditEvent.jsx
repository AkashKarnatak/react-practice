import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'
import { json } from 'react-router-dom'
import { redirect } from 'react-router-dom'

const EditEvent = () => {
  const data = useRouteLoaderData('event-loader')
  const event = data.event
  return <EventForm event={event} />
}

const editEventAction = async ({ request, params }) => {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())

    const res = await fetch(`http://localhost:8080/api/events/${params.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: data.title,
        image: data.image,
        date: data.date,
        desc: data.desc,
      }),
    })
    if (res.status === 422) {
      return res
    }
    if (!res.ok) {
      throw new Error('Something went wrong when putting event data!')
    }
    return redirect('..')
  } catch (e) {
    throw json({ message: e.message }, { status: 500 })
  }
}

EditEvent.action = editEventAction

export default EditEvent

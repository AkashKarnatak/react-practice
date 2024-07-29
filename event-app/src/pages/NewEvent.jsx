import { redirect, json } from 'react-router-dom'
import EventForm from '../components/EventForm'

const NewEvent = () => {
  return <EventForm />
}

const newEventAction = async ({ request }) => {
  try {
    const formData = await request.formData()
    const data = Object.fromEntries(formData.entries())
    const res = await fetch('http://localhost:8080/api/events/new', {
      method: 'POST',
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
      throw new Error('Something went wrong while posting new event!')
    }
    return redirect('..')
  } catch (e) {
    throw json({ message: e.message }, { status: 500 })
  }
}

NewEvent.action = newEventAction

export default NewEvent

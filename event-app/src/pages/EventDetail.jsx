import { useRouteLoaderData, json } from 'react-router-dom'
import { Link } from 'react-router-dom'

const EventDetail = () => {
  const data = useRouteLoaderData('event-loader')
  const event = data.event

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
        <button type='button' className='underline'>
          Delete
        </button>
      </div>
    </div>
  )
}

const eventLoader = async ({ params }) => {
  let status = 500
  try {
    const res = await fetch(`http://localhost:8080/api/events/${params.id}`)
    if (!res.ok) {
      status = res.status
      throw new Error()
    }
    return res
  } catch (e) {
    return json(
      { message: 'Something went wrong when fetching event data!' },
      { status },
    )
  }
}

EventDetail.loader = eventLoader

export default EventDetail

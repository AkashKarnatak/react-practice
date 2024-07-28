import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EventDetail = () => {
  const EVENTS = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'A dummy event',
      date: '02-22-2022',
      desc: 'The first event is awesome. Join this amazing event to connect with people',
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Another dummy event',
      date: '08-14-2022',
      desc: 'The second event is awesome. Join this amazing event to connect with people',
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Yet another dummy event',
      date: '12-05-2023',
      desc: 'The third event is awesome. Join this amazing event to connect with people',
    },
  ]

  const params = useParams()
  const event = EVENTS[params.id - 1]

  return (
    <div className='mt-16 flex flex-col items-center gap-8'>
      <img
        src={event.img}
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

export default EventDetail

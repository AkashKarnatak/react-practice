import EventList from '../components/EventList'

const EventsPage = () => {
  const EVENTS = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'A dummy event',
      date: '02-22-2022',
      desc: 'The first event is awesome. Join this amazing event to connect with people',
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Another dummy event',
      date: '08-14-2022',
      desc: 'The second event is awesome. Join this amazing event to connect with people',
    },
    {
      id: 3,
      image:
        'https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Yet another dummy event',
      date: '12-05-2023',
      desc: 'The third event is awesome. Join this amazing event to connect with people',
    },
  ]

  return (
    <div className='mt-16 flex flex-col items-center gap-6'>
      <div className='mb-8 text-4xl font-bold'>Events Page</div>
      <EventList events={EVENTS} />
    </div>
  )
}

export default EventsPage

import EventItem from './EventItem'

const EventList = ({ events }) => {
  return (
    <div className='flex w-[min(1000px,90%)] flex-col gap-8'>
      {events.map((x) => (
        <EventItem key={x.id} event={x} />
      ))}
    </div>
  )
}

export default EventList

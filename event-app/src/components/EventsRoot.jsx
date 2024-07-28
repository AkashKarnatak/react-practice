import { Outlet } from 'react-router-dom'
import EventsNav from './EventsNav'

const EventsRoot = () => {
  return (
    <div className='min-h-svh bg-[#222] text-white'>
      <EventsNav />
      <Outlet />
    </div>
  )
}

export default EventsRoot

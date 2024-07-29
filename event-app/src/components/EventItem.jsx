import { useNavigate } from 'react-router-dom'

const EventItem = (props) => {
  const { id, image, title, desc, date } = props.event
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate(`/events/${id}`)
  }

  return (
    <div
      className='flex w-full cursor-pointer rounded-2xl bg-[#333] shadow-[0_0_20px_10px_rgba(0,0,0,0.2)] hover:bg-[#444] transition hover:scale-[1.03]'
      onClick={clickHandler}
    >
      <img src={image} alt={title} width='30%' className='aspect-video object-cover' />
      <div className='flex flex-grow flex-col gap-6 p-8'>
        <h2 className='text-3xl font-bold'>{title}</h2>
        <p className='text-xl'>{date}</p>
      </div>
    </div>
  )
}

export default EventItem

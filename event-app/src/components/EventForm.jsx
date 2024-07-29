import { useNavigate, useNavigation, useActionData, Form } from 'react-router-dom'
import Spinner from './Spinner'

const EventForm = (props) => {
  const navigate = useNavigate()
  const navigation = useNavigation()
  const data = useActionData()
  const { title, image, date, desc } = props.event || {}

  const cancelHandler = () => {
    navigate('..')
  }

  return (
    <div className='flex w-full justify-center'>
      <Form
        method='post'
        className='flex w-[min(900px,90%)] flex-col items-end gap-8'
      >
        <div className='flex w-full flex-col gap-1'>
          <label htmlFor='title' className='text-2xl'>
            Title
          </label>
          <input
            type='text'
            name='title'
            id='title'
            className='rounded-lg border border-gray-400 bg-[#444] p-2 text-xl text-white outline-none'
            defaultValue={title}
          />
        </div>
        <div className='flex w-full flex-col gap-1'>
          <label htmlFor='image' className='text-2xl'>
            Image
          </label>
          <input
            type='text'
            name='image'
            id='image'
            className='rounded-lg border border-gray-400 bg-[#444] p-2 text-xl text-white outline-none'
            defaultValue={image}
          />
        </div>
        <div className='flex w-full flex-col gap-1'>
          <label htmlFor='date' className='text-2xl'>
            Date
          </label>
          <input
            type='date'
            name='date'
            id='date'
            className='rounded-lg border border-gray-400 bg-[#444] p-2 text-xl text-white outline-none'
            defaultValue={date}
          />
        </div>
        <div className='flex w-full flex-col gap-1'>
          <label htmlFor='desc' className='text-2xl'>
            Description
          </label>
          <textarea
            rows={8}
            id='desc'
            name='desc'
            className='rounded-lg border border-gray-400 bg-[#444] p-2 text-xl text-white outline-none'
            defaultValue={desc}
          />
        </div>
      { data && <p className='w-full text-xl text-red-400'>{data}</p>}
        <div className='flex gap-4'>
          <button
            type='button'
            className='rounded-lg px-8 py-3 text-xl'
            onClick={cancelHandler}
          >
            Cancel
          </button>
          <button
            type='submit'
            className='w-[120px] rounded-lg border border-gray-300 bg-white px-8 py-3 text-xl text-black'
            disabled={navigation.state !== 'idle'}
          >
            {navigation.state === 'submitting' ? (
              <Spinner className='w-[25px] border-[3px] border-transparent border-t-gray-500' />
            ) : (
              'Save'
            )}
          </button>
        </div>
      </Form>
    </div>
  )
}

export default EventForm

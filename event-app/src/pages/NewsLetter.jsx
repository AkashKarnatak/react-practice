import NewsLetterForm from '../components/NewsLetter'

const NewsLetter = () => {
  return (
    <div className='mt-16 flex flex-col items-center gap-6'>
      <div className='text-4xl font-bold'>Join our Newsletter now!</div>
      <NewsLetterForm />
    </div>
  )
}

export default NewsLetter

import Card from './Card'

function MovieItem(props) {
  return (
    <Card className='flex w-[80%] flex-col items-center gap-8 bg-violet-950 p-16 text-white shadow-lg'>
      <h2 className='text-5xl font-bold text-yellow-400'>
        {props.movie.title}
      </h2>
      <p className='text-2xl'>{props.movie.openingText}</p>
    </Card>
  )
}

export default MovieItem

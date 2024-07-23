import Card from './Card'

function Section(props) {
  return (
    <Card className='m-12 w-[min(90%,800px)] p-8 pb-6'>{props.children}</Card>
  )
}

export default Section

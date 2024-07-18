import Card from './Card'

function Section(props) {
  return (
    <Card
      className={`flex w-[min(90%,1200px)] flex-col items-center gap-8 bg-white py-16 ${props.className || ''}`}
    >
      {props.children}
    </Card>
  )
}

export default Section

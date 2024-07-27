import Card from './Card'

function Section(props) {
  return <Card className={`m-6 w-[min(90%,800px)] p-4 ${props.className || ''}`}>{props.children}</Card>
}

export default Section

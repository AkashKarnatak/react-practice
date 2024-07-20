import Card from "./Card"

function Section(props) {
  return (
    <Card className={`w-[min(90%,1200px)] bg-white ${props.className || ''}`}>
      {props.children}
    </Card>
  )
}

export default Section

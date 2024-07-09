function Card(props) {
  return (
    <div
      className={`rounded-3xl shadow-[0_5px_10px_-5px_rgba(0,0,0,1)] ${props.className}`}
    >
      {props.children}
    </div>
  )
}

export default Card

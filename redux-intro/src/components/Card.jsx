function Card(props) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-[0_0_20px_10px_rgba(0,0,0,0.5)] ${props.className || ''}`}
    >
      {props.children}
    </div>
  )
}

export default Card

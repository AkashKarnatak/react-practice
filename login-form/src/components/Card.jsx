function Card(props) {
  const classes =
    'border rounded-md bg-white p-2 shadow-[0_0_6px_0_rgba(0,0,0,0.3)] ' +
    props.className
  return <div className={classes}>{props.children}</div>
}

export default Card

const Card = (props) => {
  const classes = 'bg-white rounded-md ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card

const Spinner = (props) => {
  return (
    <div
      className={`aspect-square animate-spin rounded-full m-auto ${props.className || ''}`}
    ></div>
  )
}

export default Spinner

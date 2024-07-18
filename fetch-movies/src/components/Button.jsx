function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={`rounded-full bg-violet-950 px-16 py-6 text-3xl text-white hover:bg-violet-900 ${props.className || ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button

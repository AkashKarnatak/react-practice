function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={`w-fit rounded-xl bg-violet-800 px-10 py-3 text-xl text-white hover:bg-violet-900 ${props.className || ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button

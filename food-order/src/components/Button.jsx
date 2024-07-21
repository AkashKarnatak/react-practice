function Button(props) {
  return (
    <button
      type={props.type || 'button'}
      className={`w-28 rounded-full border border-orange-800 py-2 ${!props.primary ? 'text-orange-800' : 'bg-orange-800 text-white'} hover:bg-orange-900 hover:text-white`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button

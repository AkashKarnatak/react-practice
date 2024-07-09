const Modal = (props) => {
  const classes = `flex bg-[#000000cc] h-full w-full absolute justify-center items-center ${props.value.visible ? 'block' : 'hidden'}`
  return (
    <div
      className={classes}
      onClick={(e) => e.target === e.currentTarget && props.onChange(false)}
    >
      <div className='rounded-md overflow-hidden max-w-[800px] w-full'>
        <header className='bg-violet-900 px-4 py-3 text-white font-bold text-2xl'>
          Invalid Input
        </header>
        <main className='flex flex-col bg-white p-4 gap-8 items-end'>
          <p className='py-4 w-full'>{props.value.message}</p>
          <button
            type='button'
            className='bg-violet-900 text-white px-4 py-2'
            onClick={() => props.onChange(false)}
          >
            Okay
          </button>
        </main>
      </div>
    </div>
  )
}

export default Modal

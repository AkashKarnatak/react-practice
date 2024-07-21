function Input({ label, errorMsg, value, onChange, onBlur, hasError }) {
  return (
    <div className='flex w-[48%] flex-col gap-1'>
      <label htmlFor='first-name' className='text-xl font-bold'>
        {label}
      </label>
      <input
        type='text'
        name='first-name'
        id='first-name'
        className={`rounded-lg border border-gray-300 p-2 outline-none focus:border-2 text-xl ${hasError ? 'bg-red-300 border-red-600 focus:bg-orange-200 focus:border-orange-500' : 'focus:border-gray-600 '}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      { hasError && <p className='text-xl text-red-500'>{errorMsg}</p>}
    </div>
  )
}

export default Input

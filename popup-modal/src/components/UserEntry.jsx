const UserEntry = (props) => {
  return (
    <div className='w-full border border-gray-300 p-2'>
      {props.username} ({props.age} years old)
    </div>
  )
}

export default UserEntry

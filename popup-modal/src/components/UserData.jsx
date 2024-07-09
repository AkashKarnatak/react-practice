import UserEntry from "./UserEntry"
import Card from "./Card"

const UserData = (props) => {
  const classes =
    'flex flex-col max-w-[800px] w-full p-5 gap-2 ' + props.className
  return (
    <Card className={classes}>
      {props.users.map((user) => (
        <UserEntry key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  )
}

export default UserData

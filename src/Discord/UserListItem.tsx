import { UserData } from "./dummy_data"

export type UserListItemProps = {
  user: UserData
}

function UserListItem({user}: UserListItemProps) {
  return (
    <div>
      {user.username}
    </div>
  )
}

export default UserListItem

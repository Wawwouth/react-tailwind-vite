import { roles } from "./dummy_data"
import UserListItem from "./UserListItem"
import './Discord.css'

function UsersList() {
  return (
    <div className="w-60 shrink-0
      flex flex-col gap-y-6 py-4
    bg-discord-gray-5
      overflow-y-auto select-none
      "
    >
      {/* USERS LIST */}
      {roles.map((role) => (
        <div className="flex flex-col items-start justify-center px-3">
          <span className="text-xs text-discord-gray-2 font-bold align-baseline uppercase">{role.name} — {role.users.length}</span>
          <div>
            {role.users.map((user) => (
              <UserListItem user={user} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersList

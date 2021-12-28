import { roles } from "./dummy_data"
import UserListItem from "./UserListItem"
import './Discord.css'

function UsersList() {
  return (
    <div className="w-60 shrink-0
      hidden sm:flex flex-col gap-y-6 py-5
    bg-discord-gray-8
      overflow-y-auto select-none
      "
    >
      {/* USERS LIST */}
      {roles.map((role) => (
        <div className="flex flex-col px-3">
          <span className="text-xs text-discord-gray-3 font-discord-primary font-bold align-baseline uppercase">{role.name} — {role.users.length}</span>
          <div className="flex flex-col gap-y-1">
            {role.users.map((user) => (
              <UserListItem user={user} role={role} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UsersList

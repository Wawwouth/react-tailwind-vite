import { ServerRole, UserData } from "./dummy_data"
import ProfileIcon from "./ProfileIcon"

export type UserListItemProps = {
  user: UserData;
  role?: ServerRole;
}

function UserListItem({ user, role }: UserListItemProps) {
  return (
    <div className="flex items-center gap-x-2 p-1 overflow-hidden
      rounded-md
      hover:bg-discord-gray-7 cursor-pointer
    ">
      <ProfileIcon status className="shrink-0" />
      <div className="grow flex flex-col overflow-hidden">
        <span
          title={user.username}
          className="text-sm font-semibold text-ellipsis whitespace-nowrap overflow-hidden"
          style={{ color: role?.color ?? 'theme(colors.discord-gray-2)' }}
        >
          {user.username}
        </span>
        {user.status && (
          <span 
            title={user.status}
            className="
            text-xs text-discord-gray-3 font-semibold
            text-ellipsis whitespace-nowrap overflow-hidden
            "
          >
            {user.status}
          </span>
        )}
      </div>
    </div>
  )
}

export default UserListItem

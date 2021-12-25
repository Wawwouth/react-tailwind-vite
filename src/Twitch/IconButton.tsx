import React from 'react'
import MaterialIcon, { iconType } from 'shared/MaterialIcon'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string;
  className?: string;
  iconClass?: string;
  iconType?: iconType;
  noHover?: boolean;
}

function IconButton(props: IconButtonProps) {
  const {noHover, className, iconClass, name, iconType, ...other} = props
  return (
    <button className={`
      h-8 aspect-square rounded-sm
      grid place-items-center
      ${noHover ? '' : 'hover:bg-twitch-input-gray hover:bg-opacity-80'}
      ${className ?? ''}
    `} {...other}>
      <MaterialIcon className={iconClass} name={name} iconType={iconType} />
    </button>
  )
}

export default IconButton

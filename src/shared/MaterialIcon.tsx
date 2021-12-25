import React from 'react'

export type iconType = "outlined" | "round" | "sharp" | "two-tone"
export type MaterialIconProps = {
  name: string;
  className?: string;
  iconType?: iconType
}

function MaterialIcon({ name, className, iconType: type }: MaterialIconProps) {
  return (
    <span className={`material-icons${type ? '-'+type : ''} text-center select-none leading-none ${className ?? ''}`}>
      {name}
    </span>
  )
}

export default MaterialIcon

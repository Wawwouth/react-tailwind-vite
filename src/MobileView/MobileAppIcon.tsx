import React, { FunctionComponent } from 'react'

type MobileAppIconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  title?: string
}

const MobileAppIcon: FunctionComponent<MobileAppIconProps> = (props) => {
  const { src: icon, title, className, ...other } = props
  return (
    <div className='flex flex-col items-center hover:scale-105 transition-transform'>
      <img src={icon} className={`h-11 w-11 p-1 rounded-lg cursor-pointer ${className ?? ''}`} {...other} />
      <p className='text-xs text-white bg-black bg-opacity-25 rounded-md font-semibold'>{title}</p>
    </div>
  )
}

export default MobileAppIcon

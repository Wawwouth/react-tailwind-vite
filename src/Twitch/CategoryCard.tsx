import React from 'react'
import MaterialIcon from 'shared/MaterialIcon'

export type CategoryCardProps = {
  name: string;
  icon?: string;
}

function CategoryCard({name, icon}: CategoryCardProps) {
  return (
    <div className={`
    flex items-center justify-between
    bg-twitch-purple hover:bg-twitch-purple3
    cursor-pointer
    w-32 sm:w-36 h-12
    rounded-md px-2
    ${name.length > 6 ? 'text-xl' : 'text-2xl'}
    font-medium
    `}>
      <p className='leading-none'>{name}</p>
      {icon && (
        <MaterialIcon name={icon} iconType='outlined' className={`text-3xl`} />
      )}
    </div>
  )
}

export default CategoryCard

import React from 'react'

export type CategoryCardProps = {
  name: string
}

function CategoryCard({name}: CategoryCardProps) {
  return (
    <div className='
    bg-twitch-purple hover:bg-twitch-purple3
    cursor-pointer
    w-36 h-12
    flex items-center
    rounded-md px-2 
    text-2xl font-medium
    '>
      <p className='leading-none'>{name}</p>
    </div>
  )
}

export default CategoryCard

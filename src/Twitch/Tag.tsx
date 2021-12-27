import React from 'react'
import IconButton from './IconButton'

export type TagSize = 'small' | 'medium'
export type TagProps = {
  text: string;
  close?: boolean;
  size: TagSize;
}

function Tag(props: TagProps) {
  const {text, close, size} = props
  return (
    <div className={`flex items-center cursor-pointer px-2 gap-1
    ${size === 'medium' ? 'h-7' : 'h-5'}
    ${size === 'medium' ? 'py-2' : 'py-2'}
    ${size === 'medium' ? 'text-sm' : 'text-xs'}
    font-semibold text-gray-300 
    transition-colors
    bg-twitch-tag-gray 
    rounded-2xl w-fit border-2 
    border-twitch-tag-gray
    ${size === 'small' ? 'hover:bg-twitch-gray4' : 'hover:border-twitch-gray4'}
    `}
    >
      <p className='leading-none text-center'>{text}</p>
      {close && (
        <IconButton noHover name='close' iconType='round' className='h-4' iconClass='text-sm' />
      )}
    </div>
  )
}

export default Tag

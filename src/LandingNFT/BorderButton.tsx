import React from 'react'

type BorderGradientButtonProps = {
  text: string;
  color: string;
  className?: HTMLDivElement['className']
}

function BorderGradientButton({color, text, className}: BorderGradientButtonProps) {
  return (
    <div
      className='rounded-3xl grid items-center p-[1px]'
      style={{ background: color }}
    >
      <button type='button' className={`rounded-3xl bg-[#1f1d21] p-2 px-6 h-full ${className ?? ''}`}>
        {text}
      </button>
    </div>
  )
}

export default BorderGradientButton

import dayjs from 'dayjs'
import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react'
import MobileHeader from './MobileHeader'


const MobileView: FunctionComponent<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [now, setNow] = useState(dayjs())
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={`h-full w-full grid place-items-center overflow-hidden bg-blue-900`}>
      <div className={`h-[628px] w-[306px] border-gray-900 border-[14px] rounded-3xl overflow-hidden box-border relative ${props.className}`}>
        <div className='absolute top-0 w-full'>
          <div className='bg-black w-36 h-5 mx-auto rounded-b-2xl relative flex items-center content-center'>
            <div className='bg-gray-800 w-14 h-2 mx-auto rounded-full'></div>
            <div className='bg-blue-900 w-3 h-3 mx-auto rounded-full absolute top-auto right-3.5'></div>
          </div>
        </div>
        <div className='h-full w-full flex flex-col'>
          <MobileHeader hour={now.format('HH:mm')} />
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default MobileView

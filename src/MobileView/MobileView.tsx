import React, { FunctionComponent } from 'react'


const MobileView: FunctionComponent = (props) => {
  return (
    <div className={`h-[628px] w-[306px] border-gray-900 border-[14px] rounded-3xl overflow-hidden box-border relative`}>
      <div className='absolute top-0 w-full'>
        <div className='bg-black w-36 h-5 mx-auto rounded-b-2xl relative flex items-center content-center'>
          <div className='bg-gray-800 w-14 h-2 mx-auto rounded-full'></div>
          <div className='bg-blue-900 w-3 h-3 mx-auto rounded-full absolute top-auto right-3.5'></div>
        </div>
      </div>
      {props.children}
    </div>
  )
}

export default MobileView

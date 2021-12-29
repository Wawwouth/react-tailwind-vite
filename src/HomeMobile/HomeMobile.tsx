import MobileView from 'MobileView/MobileView'
import React, { FunctionComponent, HTMLAttributes, useEffect, useState } from 'react'
import MobileAppIcon from 'MobileView/MobileAppIcon'
import call from 'resources/img/call.svg'
import internet from 'resources/img/internet.svg'
import sms from 'resources/img/sms.svg'
import music from 'resources/img/music.svg'
import calendar from 'resources/img/calendar.svg'
import camera from 'resources/img/camera.svg'
import gps from 'resources/img/gps.svg'
import mail from 'resources/img/mail_white.svg'
import settings from 'resources/img/settings.svg'
import dayjs from 'dayjs'

function HomeMobile() {
  return (
    <MobileView className="bg-[url('/src/resources/img/wallpaper.jpg')] bg-cover">
      <div className={`h-full w-full flex flex-col font-sans select-none`}>
        <nav className='flex-grow flex flex-col mt-6'>
          <div className='flex-grow grid grid-cols-4 grid-rows-6 px-1'>
            <MobileAppIcon src={call} title="Appel" className='bg-green-600' />
            <MobileAppIcon src={internet} title="Internet" className=' bg-[#44aff6]' />
            <MobileAppIcon src={sms} title="SMS" className='bg-green-600' />
            <MobileAppIcon src={music} title="Musique" className='bg-[#6d4cc7]' />
            <MobileAppIcon src={calendar} title="Calendrier" className='bg-white' />
            <MobileAppIcon src={camera} title="Camera" className='bg-gray-300' />
            <MobileAppIcon src={gps} title="Maps" className='bg-white' />
            <MobileAppIcon src={mail} title="Email" className='bg-blue-400' />
            <MobileAppIcon src={settings} title="Paramètres" className='bg-gray-400' />
          </div>
          <div className='grid place-items-center text-xs'>
            ⚪ ⚫ ⚫
          </div>
        </nav>
        <footer className='bg-white bg-opacity-30 h-14 rounded-2xl m-1 p-0.5 px-1 flex justify-around items-center'>
          <MobileAppIcon src={call} className='bg-green-600' />
          <MobileAppIcon src={internet} className='bg-[#44aff6]' />
          <MobileAppIcon src={sms} className='bg-green-600' />
          <MobileAppIcon src={music} className='bg-[#6d4cc7]' />
        </footer>
      </div>
    </MobileView>
  )
}

export default HomeMobile

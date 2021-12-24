import React from 'react';
import wifi from 'resources/img/wifi.svg';
import signal from 'resources/img/signal.svg';
import battery from 'resources/img/battery.svg';

type MobileHeaderProps = {
  hour: string
}

export default function MobileHeader({hour}: MobileHeaderProps) {
  return (
    <header className='pl-4 h-5 flex justify-between items-center bg-black bg-opacity-20 font-bold'>
      <p className='text-white text-sm'>{hour}</p>
      <div className='flex justify-end h-4/5'>
        <img src={signal} />
        <img src={wifi} />
        <img src={battery} />
      </div>
    </header>
  );
}

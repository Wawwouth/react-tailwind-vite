import React from 'react'
import music from 'resources/img/music.svg'
import search from 'resources/img/search_white.svg'
import bojji from 'resources/img/bojji.png'
import BorderGradientButton from './BorderButton'

const grad = "linear-gradient(90deg, #fe7a7e 0%, #fd9f50 17%, #f4493c 38%, #c4679e 53%, #6f48af 68%, #685eec 82%, #272759 97%)"
const textGrad = "linear-gradient(90deg, rgba(243,69,61,1) 0%, rgba(172,93,157,1) 100%)"
function LandingNFT() {
  return (
    <div className="h-full w-full font-['Rubik', sans-serif] 
      flex flex-col
    bg-[#1f1d21] text-white gap-10
      p-4 px-10
    ">
      <header className='grid grid-cols-3'>
        <div className='h-full place-self-start flex items-center gap-1'>
          <div className='h-2/3 rounded-full aspect-square' style={{background: grad}}></div>
          CryptoHype
        </div>
        <nav className='flex justify-around gap-4 place-self-center h-full'>
          <a href="#">Market</a>
          <a href="#">Discover</a>
          <a href="#">About</a>
          <a href="#">Artist</a>
        </nav>
        <div
          className='flex place-self-end rounded-3xl justify-end bg-red-400 p-[1px] overflow-hidden h-full'
          style={{ background: grad }}
        >
          <div className='bg-[#1f1d21] flex-1 rounded-3xl flex p-1'>
            <input
              className='flex-1 rounded-l-3xl px-1 bg-transparent outline-none'
              type="text"
              placeholder='Search related to NFT'
            />
            <button>
              <img src={search} className='rounded-full p-1' style={{background: grad}} />
            </button>
          </div>
        </div>
      </header>
      <main className='grid grid-cols-2 grid-rows-2 gap-y-14'>
        {/* Left Panel */}
        <div className='flex flex-col justify-start gap-10'>
          <div className='flex flex-col gap-4 text-6xl font-bold'>
            <span>
              Best&nbsp;
              <span className='bg-clip-text' style={{ background: textGrad, backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NFT</span>
            </span>
            <span>Collections for</span>
            <span>Your Future</span>
          </div>
          <div className='flex gap-5 ml-2 max-w-xs'>
            <button
              type='button'
              className='rounded-3xl p-2 px-6 font-semibold'
              style={{ background: grad }}
            >
              Explore now
            </button>
            <BorderGradientButton color={grad} text='Create NFT' className='font-semibold' />
          </div>
          <div className='grid grid-cols-3 grid-rows-1 max-w-xs'>
            <div className='flex flex-col items-center border-r-[1px] border-white'>
              <span className='font-bold'>62500</span>
              <span className='text-xs font-semibold'>Collection</span>
            </div>
            <div className='flex flex-col items-center border-r-[1px] border-white'>
              <span className='font-bold'>14000</span>
              <span className='text-xs font-semibold'>Auctions</span>
            </div>
            <div className='flex flex-col items-center'>
              <span className='font-bold'>5200</span>
              <span className='text-xs font-semibold'>Artist</span>
            </div>
          </div>
        </div>
        {/* Right Panel */}
        <div className='flex justify-end items-center relative h-full overflow-hidden'>
          <div 
          className='rounded-full float-right h-full aspect-square'
          style={{background: grad}}
          >
            <div className='bg-contain bg-no-repeat h-full w-2/3' style={{backgroundImage: `url('${bojji}')`}}></div>
          </div>
          {/* CARD */}
          <div className='bg-white bg-opacity-25 rounded-lg flex justify-between items-start p-2 z-0 absolute right-0 top-1/2 text-xs gap-2'>
            <div className='flex flex-col items-center'>
              <span className='font-semibold'>Current Bid</span>
              <span className='font-bold'>12.43 ETH</span>
              <div className='rounded-3xl p-[3px] px-3 
                  text-xs font-bold 
                  mt-2'
                style={{ background: grad }}
              >
                <button>Place Bid</button>
              </div>
            </div>
            <div className='flex flex-col items-end'>
              <span className='font-semibold'>Ends Inc</span>
              <span className='font-bold'>12 : 24 : 00</span>
              <div className='rounded-3xl p-[2px] px-3 text-xs font-bold border-white border-[1px] mt-2'>
                <button className=''>View NFT</button>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className='col-span-2 grid grid-cols-3 place-items-center font-semibold h-fit'>
          <div className='w-2/3 grid grid-cols-4 items-center'>
            <img src={music} className='h-12 w-12 rounded-full col-span-1' style={{background: grad}} />
            <span className='col-span-3'>
              Trusted with 10 Achievement
            </span>
          </div>
          <div className='w-2/3 grid grid-cols-4 items-center'>
            <img src={music} className='h-12 w-12 rounded-full col-span-1' style={{background: grad}} />
            <span className='col-span-3'>
              Easy Buy and Submit NFT Art
            </span>
          </div>
          <div className='w-2/3 grid grid-cols-4 items-center'>
            <img src={music} className='h-12 w-12 rounded-full col-span-1' style={{background: grad}} />
            <span className='col-span-3'>
              Get Discount Pro Membership
            </span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingNFT

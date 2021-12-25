import React from 'react'
import search from 'resources/img/search_white.svg'
import bojji from 'resources/img/bojji.png'
import bookmark from 'resources/img/bookmark_white.svg'
import shop from 'resources/img/shop_white.svg'
import gift from 'resources/img/gift_white.svg'
import menu from 'resources/img/menu_white.svg'
import BorderGradientButton from './BorderButton'

const grad = "linear-gradient(90deg, #fe7a7e 0%, #fd9f50 17%, #f4493c 38%, #c4679e 53%, #6f48af 68%, #685eec 82%, #272759 97%)"
const textGrad = "linear-gradient(90deg, rgba(243,69,61,1) 0%, rgba(172,93,157,1) 100%)"
function LandingNFT() {
  return (
    <div className="font-rubik-sans
      min-h-full
      flex flex-col
    bg-[#1f1d21] text-white gap-10
      p-4 px-6 sm:px-12 lg:px-32 xl:px-52
    ">
      <header className='grid grid-cols-3'>
        <div className='h-full flex items-center gap-1'>
          <div className='h-2/3 rounded-full aspect-square' style={{ background: grad }}></div>
          CryptoHype
        </div>
        <nav className='hidden sm:flex justify-around items-center gap-4 h-full'>
          <a href="#">Market</a>
          <a href="#">Discover</a>
          <a href="#">About</a>
          <a href="#">Artist</a>
        </nav>
        <div
          className='hidden sm:flex rounded-3xl col-span-2 sm:col-span-1 ml-auto justify-end p-px overflow-hidden h-8'
          style={{ background: grad }}
        >
          <div className='bg-[#1f1d21] rounded-3xl flex justify-center p-1 overflow-hidden'>
            <div
              className='rounded-l-3xl overflow-hidden px-1'
            >
              <input
                className='px-1 outline-none bg-transparent'
                type="text"
                placeholder='Search related to NFT'
              />
            </div>
            <button className='h-full aspect-square'>
              <img src={search} className='rounded-full p-1' style={{ background: grad }} />
            </button>
          </div>
        </div>
        <button className='sm:hidden col-span-2 place-self-end'>
          <img src={menu} />
        </button>
      </header>
      <main className='flex flex-wrap gap-y-14'>
        {/* Left Panel */}
        <div className='w-full sm:w-1/2 flex flex-col justify-evenly overflow-hidden'>
          <div className='flex flex-col gap-2 text-4xl md:text-5xl lg:text-6xl font-bold'>
            <span>
              Best&nbsp;
              <span className='bg-clip-text' style={{ background: textGrad, backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>NFT</span>
            </span>
            <span>Collections for</span>
            <span>Your Future</span>
          </div>
          <div className='flex flex-row justify-evenly sm:justify-start gap-5 ml-2 max-w-xs text-sm mt-2'>
            <button
              type='button'
              className='rounded-3xl p-2 px-6 font-semibold'
              style={{ background: grad }}
            >
              Explore now
            </button>
            <BorderGradientButton color={grad} text='Create NFT' className='font-semibold' />
          </div>
          <div className='grid grid-cols-3 grid-rows-1 max-w-xs mt-2'>
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
        <div className='w-full sm:w-1/2 flex justify-end items-start relative h-full overflow-hidden p-2 sm:p-0'>
          <div
            className='rounded-full w-full max-w-screen-sm sm:h-full aspect-square relative'
            style={{ background: grad }}
          >
            <div className='absolute top-0 left-0 bg-contain bg-no-repeat h-full w-2/3' style={{ backgroundImage: `url('${bojji}')` }}></div>
            {/* CARD */}
            <div className='bg-white bg-opacity-25 rounded-lg flex justify-between items-start p-2 z-0 absolute right-0 top-1/3 sm:top-1/2 text-xs gap-2'>
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
                  <button>View NFT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className='w-full
          grid grid-cols-1 sm:grid-cols-3
          gap-1
          font-semibold text-xs sm:text-sm lg:text-lg xl:text-2xl'
        >
          <div className='h-full place-content-start flex gap-1 items-center'>
            <img src={bookmark} className='h-full p-1 aspect-square rounded-full' style={{ background: grad }} />
            <span>
              Trusted with 10<br />
              Achievement
            </span>
          </div>
          <div className='h-full place-content-center flex gap-1 items-center'>
            <img src={shop} className='h-full p-1 aspect-square rounded-full' style={{ background: grad }} />
            <span>
              Easy Buy & Submit<br />
              NFT Art
            </span>
          </div>
          <div className='h-full place-content-end flex gap-1 items-center'>
            <img src={gift} className='h-full p-1 aspect-square rounded-full' style={{ background: grad }} />
            <span>
              Get Discount Pro<br />
              Membership
            </span>
          </div>
        </div>

      </main>
    </div>
  )
}

export default LandingNFT

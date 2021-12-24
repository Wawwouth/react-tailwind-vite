import React from 'react'
import music from 'resources/img/music.svg'
import search from 'resources/img/search_white.svg'

const grad = "linear-gradient(90deg, rgba(255,152,66,1) 0%, rgba(255,189,52,1) 14%, rgba(255,77,35,1) 28%, rgba(209,0,255,1) 43%, rgba(185,2,233,1) 58%, rgba(105,11,224,1) 72%, rgba(96,0,217,1) 87%, rgba(44,40,205,1) 100%)"
function LandingNFT() {
  return (
    <div className="h-full w-full font-['Rubik', sans-serif] 
      flex flex-col 
    bg-[#1f1d21] text-white gap-10
      p-4 px-10
    ">
      <header className='flex justify-between'>
        <div>CryptoHype</div>
        <nav className='flex justify-around gap-4'>
          <a href="#">Market</a>
          <a href="#">Discover</a>
          <a href="#">About</a>
          <a href="#">Artist</a>
        </nav>
        <div className='flex rounded-xl px-2'>
          <input className='bg-none' type="text" placeholder='Search related to NFT' />
          <img src={search} alt="" />
        </div>
      </header>
      <main className='grid grid-cols-2 grid-rows-2 gap-y-7'>
        <div className='flex flex-col justify-start gap-4'>
          <span className='text-5xl'>Best NFT</span>
          <span className='text-5xl'>Collections for</span>
          <span className='text-5xl'>Your Future</span>
          <div className='flex gap-5 ml-2 max-w-xs'>
            <button type='button' className='rounded-3xl p-1 px-4 bg-red-500'>
              Explore now
            </button>
            <button type='button' className='border-2 rounded-3xl p-1 px-4 border-red-500'>
              Create NFT
            </button>
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
        <div className='flex justify-end items-center bg-red-400'>
          <div className='bg-white bg-opacity-25 rounded-lg w-56 flex justify-between items-start p-3'>
            <div className='flex flex-col items-center'>
              <span className='text-sm'>Current Bid</span>
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
              <span className='text-sm'>Ends Inc</span>
              <span className='font-bold'>12 : 24 : 00</span>
              <div className='rounded-3xl p-[2px] px-3 text-xs font-bold border-white border-[1px] mt-2'>
                <button className=''>View NFT</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-2 flex justify-evenly grow-0'>
          <div className='w-1/3 grid grid-cols-4 items-center'>
            <img src={music} className='h-12 w-12 bg-purple-500 rounded-full col-span-1' />
            <span className='col-span-3'>
              Trusted with 10 Achievement
            </span>
          </div>
          <div className='w-1/3 grid grid-cols-4 items-center'>
            <img src={music} className='h-12 w-12 bg-purple-500 rounded-full col-span-1' />
            <span className='col-span-3'>
              Easy Buy and Submit NFT Art
            </span>
          </div>
          <div className='w-1/3 grid grid-cols-4 items-center'>
            <img src={music} className='h-12 w-12 bg-purple-500 rounded-full col-span-1' />
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

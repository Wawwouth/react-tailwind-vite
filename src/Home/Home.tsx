import Preview from './Preview'
import phone from 'resources/img/phone.svg'
import btc from 'resources/img/btc.svg'

function Home() {
  const pages = [
    {path: "/mobile", title: "Mobile", icon: phone},
    {path: "/nft", title: "NFT", icon: btc},
  ]
  return (
    <div className='h-full w-full flex flex-col'>
      <header className='bg-gray-500 h-24 grid place-items-center'>
        <span className='text-3xl'>
          Playground
        </span>
      </header>
      <main className='bg-slate-300 flex-grow flex gap-5 p-2 flex-wrap content-start'>
      {pages.map(({path, title, icon}, index) =>
        <Preview path={path} title={title} icon={icon} key={`${title}-${path}`} />
      )}
      </main>
      <footer className='bg-slate-700 h-10 grid place-items-center'>
        Footer
      </footer>
    </div>
  )
}

export default Home

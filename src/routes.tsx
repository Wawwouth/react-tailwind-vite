import React from 'react'
import phone from 'resources/img/phone.svg'
import btc from 'resources/img/btc.svg'

const Discord = React.lazy(() => import('Discord/Discord'))
const Twitch = React.lazy(() => import('Twitch/Twitch'))
const LandingNFT = React.lazy(() => import('LandingNFT/LandingNFT'))
const Home = React.lazy(() => import('Home/Home'))
const HomeMobile = React.lazy(() => import('HomeMobile/HomeMobile'))


type Route = {
  path: string;
  element: JSX.Element;
  title?: string;
  icon?: string;
}

const routes: Route[] = [
  {
    path: "/discord",
    title: "Discord",
    element: <Discord />
  },
  {
    path: "/twitch",
    title: "Twitch",
    element: <Twitch />
  },
  {
    path: "/nft",
    title: "NFT",
    element: <LandingNFT />,
    icon: btc
  },
  {
    path: "/mobile",
    title: "Mobile",
    element: <HomeMobile />,
    icon: phone
  },
  {
    path: "/",
    element: <Home />
  },
]

export default routes
import React from 'react'

const LandingNFT = React.lazy(() => import('LandingNFT/LandingNFT'))
const Home = React.lazy(() => import('Home/Home'))
const HomeMobile = React.lazy(() => import('HomeMobile/HomeMobile'))


type Route = {
  path: string,
  element: JSX.Element
}

const routes: Route[] = [
  {
    path: "/nft",
    element: <LandingNFT />
  },
  {
    path: "/mobile",
    element: <HomeMobile />
  },
  {
    path: "/",
    element: <Home />
  },
]

export default routes
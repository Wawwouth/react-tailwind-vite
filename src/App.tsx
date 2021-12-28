import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Routes } from 'react-router'

import routes from 'routes'
import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <div className="App h-full w-full">
        <Routes>
          {routes.map(({ path, element }, index) =>
            <Route
              path={path}
              element={
                <React.Suspense fallback={<div className='h-full w-full grid place-items-center bg-gray-900 text-white'>loading...</div>}>
                  {element}
                </React.Suspense>
              }
              key={index}
            />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

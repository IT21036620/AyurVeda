import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import IndexRoutes from './routes'

import HomeReview from './components/HomeReview/HomeReview'

function App() {
  return (
    <div className="App">
      {/* <HomeReview /> */}
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App

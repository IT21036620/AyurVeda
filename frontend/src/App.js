import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import IndexRoutes from './routes'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <IndexRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App

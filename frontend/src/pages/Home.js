import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl text-blue-500 capitalize p-3">Home</h1>
    </div>
  )
}

export default Home

import { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await fetch(
        'http://localhost:4000/api/buyer/viewAllBuyers'
      )
      const json = await response.json()
      if (response.ok) {
        // setSupplierList(json.data)
        console.log(json)
      }
    }
    fetchSuppliers()
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/buyer/viewAllBuyers')
      .then((res) => {
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div>
      <h1 className="text-4xl text-blue-500 capitalize p-3">Home</h1>
    </div>
  )
}

export default Home

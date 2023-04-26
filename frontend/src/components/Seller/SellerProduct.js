import React from 'react'
import { Link } from 'react-router-dom'
import './component.css'
import axios from 'axios'

const deleteProductUrl = 'http://localhost:3006/api/v1/products'

const SellerProduct = ({
  image,
  product_name,
  id,
  price,
  rating,
  rate_count,
}) => {
  const http = window.location.protocol
  const domain = window.location.hostname
  const port = window.location.port

  const url = `${http}\/\/${domain}:${port}\/`
  console.log(url)

  const deleteProduct = async () => {
    try {
      const resp = await axios.delete(`${deleteProductUrl}/${id}`)
      alert('Product Deleted Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Product Deletion Failed...')
      console.log(error.response)
    }
  }

  return (
    <div className="card">
      <div className="card_img">
        <img
          className="img"
          crossOrigin="anonymous"
          // src={`${http}\/\/${domain}:3006\/${image}`}
          src={`http:\/\/localhost:3006\/${image}`}
        />
      </div>
      <div className="card_header">
        <h2
          className="h2"
          class="font-poppins font-bold text-xl text-center h-12"
        >
          {product_name}
        </h2>
        <p className="p">{rating}/5</p>
        <p className="price">
          {price}.00
          <span className="span">LKR</span>
        </p>
        <Link to={`/seller/${id}`}>
          <div class="font-sans bg-[rgb(33,190,33)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            View Details
          </div>
        </Link>
        <Link to={`/seller/update-product/${id}`}>
          <div class="font-sans bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-[10px]">
            Edit Details
          </div>
        </Link>
        <div
          class="font-sans bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-[10px]"
          onClick={() => {
            deleteProduct()
            window.location.reload(true)
          }}
        >
          Delete Item
        </div>
      </div>
    </div>
  )
}

export default SellerProduct

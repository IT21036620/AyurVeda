import React from 'react'
import SellerProduct from '../Seller/SellerProduct'
import Loading from './Loading'
import { useGlobalContext } from '../../pages/seller/context'
import { Link } from 'react-router-dom'
import './component.css'

const id = '64399df40f08cb626892d7dd'

const SellerProductList = () => {
  const { products, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (products.length < 1) {
    return <h2 className="section-title">No Products Posted Yet</h2>
  }

  const listItems = products.map((item) => (
    <SellerProduct key={item.id} {...item} />
  ))

  return (
    <div>
      <div class="flex justify-center">
        <Link to={`/seller/add-product`}>
          <div class="font-sans bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-[10px] text-center w-40 mx-3">
            Add Item
          </div>
        </Link>
        <Link to={`/update/seller/${id}`}>
          <div class="font-sans bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full mt-[10px] text-center w-40 mx-3">
            Update Account
          </div>
        </Link>
      </div>
      {/* <div class="mt-[15px] text-center">My Rating: </div> */}
      <div className="main_content">{listItems}</div>
    </div>
  )
}

export default SellerProductList

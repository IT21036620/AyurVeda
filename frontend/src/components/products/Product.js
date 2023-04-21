import React from 'react'
import { Link } from 'react-router-dom'
import './component.css'
import { FaShoppingCart } from 'react-icons/fa'

const Product = ({ image, product_name, id, price, rating, rate_count }) => {
  // return (
  //   <article className="product">
  //     <div className="img-container">
  //       <img
  //         crossOrigin="anonymous"
  //         src={`http:\/\/localhost:4000\/${image}`}
  //         alt={product_name}
  //       />
  //     </div>
  //     <div className="product-footer">
  //       <h3>{product_name}</h3>
  //       <h4>{rating}/5</h4>
  //       <h6>{`(${rate_count} ratings)`}</h6>
  //       <p>{`Rs.${price}.00`}</p>
  //       <Link to={`/product/${id}`} className="btn btn-primary btn-details">
  //         details
  //       </Link>
  //     </div>
  //   </article>
  // )

  return (
    <div className="card">
      <div className="card_img">
        <img
          className="img"
          crossOrigin="anonymous"
          src={`http:\/\/localhost:4000\/${image}`}
        />
      </div>
      <div className="card_header">
        <h2 className="h2" class="font-poppins font-bold text-xl text-center">
          {product_name}
        </h2>
        <p className="p">{rating}/5</p>
        <p className="price">
          {price}.00
          <span className="span">LKR</span>
        </p>
        <Link to={`/product/${id}`}>
          <div class="font-sans bg-[rgb(33,190,33)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
            View Details
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Product

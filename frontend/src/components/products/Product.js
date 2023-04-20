import React from 'react'
import { Link } from 'react-router-dom'
import './component.css'

const Product = ({ image, product_name, id, price, rating, rate_count }) => {
  return (
    <article className="product">
      <div className="img-container">
        <img
          crossOrigin="anonymous"
          src={`http:\/\/localhost:3000\/${image}`}
          alt={product_name}
        />
      </div>
      <div className="product-footer">
        <h3>{product_name}</h3>
        <h4>{rating}/5</h4>
        <h6>{`(${rate_count} ratings)`}</h6>
        <p>{`Rs.${price}.00`}</p>
        <Link to={`/product/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  )
}

export default Product

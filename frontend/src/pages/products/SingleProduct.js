import React, { useEffect } from 'react'
import Loading from '../../components/products/Loading'
import { useParams, Link } from 'react-router-dom'
import './page.css'
import { useGlobalContext } from './context'
import axios from 'axios'

const url = 'http://localhost:3000/api/v1/products/singleProduct/'

const SingleProduct = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [product, setProduct] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getProduct() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data.product)
        // const data = response
        if (data.product) {
          const {
            availability: availability,
            rating: rating,
            product_name: product_name,
            manufacturer: manufacturer,
            package_quantity: package_quantity,
            price: price,
            mfd: mfd,
            exp: exp,
            shipping_weight: shipping_weight,
            category: category,
            description: description,
            image: image,
            rate_count: rate_count,
          } = data.product

          const newProduct = {
            availability,
            rating,
            product_name,
            manufacturer,
            package_quantity,
            price,
            mfd,
            exp,
            shipping_weight,
            category,
            description,
            image,
            rate_count,
          }
          setProduct(newProduct)
        } else {
          setProduct(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getProduct()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!product) {
    return <h2 className="section-title">No Product to display</h2>
  }
  const {
    product_name,
    image,
    category,
    description,
    price,
    manufacturer,
    rating,
    rate_count,
    package_quantity,
    mfd,
    exp,
    shipping_weight,
  } = product

  return (
    <section className="section product-section">
      <div>
        <Link to="/products" className="btn btn-primary">
          back to products
        </Link>
      </div>
      <h2 className="section-title">{product_name}</h2>
      <div className="drink">
        <img
          crossOrigin="anonymous"
          src={`http:\/\/localhost:3000\/${image}`}
          alt={product_name}
        ></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">Product Name :</span>
            {product_name}
          </p>
          <p>
            <span className="drink-data">description :</span>
            {description}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">package_quantity :</span>
            {package_quantity}
          </p>
          <p>
            <span className="drink-data">price :</span>
            Rs.{price}.00
          </p>
          <p>
            <span className="drink-data">manufacturer :</span>
            {manufacturer}
          </p>
          <p>
            <span className="drink-data">rating :</span>
            {rating}/5 ({rate_count} ratings)
          </p>
          <p>
            <span className="drink-data">shipping_weight :</span>
            {shipping_weight}
          </p>
          <p>
            <span className="drink-data">mfd :</span>
            {mfd.substring(0, 10)}
          </p>
          <p>
            <span className="drink-data">exp :</span>
            {exp.substring(0, 10)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct

import React, { useCallback, useEffect, useState } from 'react'
import '../products/component.css'
import Product from '../products/Product'

const search = 'http://localhost:3008/api/v1/products?sort=-rating'

function FeaturedProducts() {
  const [products, setProducts] = useState([])

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch(`${search}`)
      const data = await response.json()
      const { products } = data
      if (products) {
        const newProducts = products.map((item) => {
          const {
            _id,
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
            createdBy,
          } = item
          return {
            id: _id,
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
            createdBy,
          }
        })
        setProducts(newProducts)
      } else {
        setProducts([])
      }
    } catch (error) {
      console.log(error)
    }
  }, [search])
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  if (products.length < 1) {
    return <h2 className="section-title">No Featured Product Available</h2>
  }

  const listItems = products
    .slice(0, 3)
    .map((item) => <Product key={item.id} {...item} />)

  return (
    <div>
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="main_content">{listItems}</div>
    </div>
  )
}

export default FeaturedProducts

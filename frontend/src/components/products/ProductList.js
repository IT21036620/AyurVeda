import React from 'react'
import Product from './Product'
import Loading from './Loading'
import { useGlobalContext } from '../../pages/products/context'
import './component.css'

const ProductList = () => {
  const { products, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (products.length < 1) {
    return (
      <h2 className="section-title">
        No Products Matched Your Search Criteria
      </h2>
    )
  }

  const listItems = products.map((item) => <Product key={item.id} {...item} />)

  // return (
  //   <div className="card">
  //     <Product key={item.id} {...item} />
  //     <div className="card_img">
  //       <img
  //         crossOrigin="anonymous"
  //         src={`http:\/\/localhost:4000\/${item.image}`}
  //       />
  //     </div>
  //     <div className="card_header">
  //       <h2>{item.product_name}</h2>
  //       <p>{item.rating}/5</p>
  //       <p className="price">
  //         {item.price}.00<span>Rs</span>
  //       </p>
  //       <div className="btn">Add to cart</div>
  //     </div>
  //   </div>
  // )
  // })

  return (
    // <section className="section">
    //   <h2 className="section-title">Products</h2>
    //   <div className="products-center">
    //     {products.map((item) => {
    //       return <Product key={item.id} {...item} />
    //     })}
    //   </div>
    // </section>

    <div className="main_content">
      {/* <h3 className="h3">Products</h3> */}
      {listItems}
    </div>
    // <div className="main_content">
    //   <h2 class="flex items-center justify-center font-medium">Products</h2>
    //   <div class="w-20 h-1 mb-5 mx-auto background: rgb(33, 190, 33)"></div>
    //   {listItems}
    // </div>
  )
}

export default ProductList

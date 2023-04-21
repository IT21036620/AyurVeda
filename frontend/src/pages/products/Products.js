import React from 'react'
import SearchForm from '../../components/products/SearchForm'
import ProductList from '../../components/products/ProductList'
import { AppProvider } from './context'
import '../../components/products/product.css'

const Products = () => {
  return (
    <main>
      <AppProvider>
        <div className="container">
          <SearchForm />
          <ProductList />
        </div>
      </AppProvider>
    </main>
  )
}

export default Products

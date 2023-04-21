import React from 'react'
import SearchForm from '../../components/products/SearchForm'
import ProductList from '../../components/products/ProductList'
import { AppProvider } from './context'

const Products = () => {
  return (
    <main>
      <AppProvider>
        <SearchForm />
        <ProductList />
      </AppProvider>
    </main>
  )
}

export default Products

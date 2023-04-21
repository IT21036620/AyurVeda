import React from 'react'
import SearchForm from '../../components/products/SearchForm'
import ProductList from '../../components/products/ProductList'
import { AppProvider } from './context'
import '../../components/products/product.css'

const Products = () => {
  return (
    <main>
      <AppProvider>
        <div class="flex flex-col w-full h-full box-border bg-[color:#d7d6d6] pt-[30px] pb-5 px-[50px]">
          <SearchForm />
          <ProductList />
        </div>
      </AppProvider>
    </main>
  )
}

export default Products

import React from 'react'
import { AppProvider } from './context'
import '../../components/Seller/product.css'
import SellerProductList from '../../components/Seller/SellerProductList'

const SellerProducts = () => {
  return (
    <main>
      <AppProvider>
        <div class="flex flex-col w-full h-full box-border bg-[color:#d7d6d6] pt-[30px] pb-5 px-[50px]">
          <SellerProductList />
        </div>
      </AppProvider>
    </main>
  )
}

export default SellerProducts

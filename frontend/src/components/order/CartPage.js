import React from 'react'
import OrderSummary from './orderSummary'
import ShoppingCart from './shoppingCart'

export default function CartPage() {
  return (
    //         <div className="cart-container" class="pt-10 px-20">
    //         <h1 class="text-center pb-5">Shopping Cart</h1>

    // <table class="table-auto">
    //   <thead>
    //     <tr>
    //       <th class="pr-40 ">PRODUCT</th>
    //       <th class="pr-60">PRODUCT NAME</th>
    //       <th class="pr-40">UNIT PRICE</th>
    //       <th class="pr-20">QUANTITY</th>
    //       <th class="pr-20">TOTAL</th>
    //       <th>ACTION</th>
    //     </tr>

    // <tr>
    //     <td></td>
    //     <td class="pt-5 ">Siddhalepa Balm 50g</td>
    //     <td class="pt-5"> Rs 150.00</td>
    //     <td class="pt-5">1</td>
    //     <td class="pt-5">Rs 150.00</td>
    // </tr>
    //     </thead>
    // </table>
    //         </div>

    <div class="bg-gray-100 px-4 py-8">
      <div class="flex">
        <div class=" w-3/4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <ShoppingCart />
        </div>

        <div class=" w-1/4 max-w-ml mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

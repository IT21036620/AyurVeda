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

    <div class="bg-gray-100 px-6 py-5">
      <div class="flex">
        <div class=" w-3/4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <ShoppingCart />
        </div>

        <div class=" w-1/4 ">
          <div class="max-w-ml mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div class=" p-4">
              <h2 class="font-bold text-xl mb-4 pb-2 pt-2">Promo code</h2>
              <div class="flex justify-between mb-2 pb-2">
                <input
                  type="text"
                  class="border-2 border-gray-400 bg-white rounded-lg px-4 py-2 text-xl"
                ></input>
                <button class="bg-transparent hover:bg-green-200 text-black-800  py-2 px-4 border border-gray-400 rounded shadow">
                  Apply
                </button>
              </div>
            </div>
          </div>

          <div class="pt-5">
            <div class="max-w-ml mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

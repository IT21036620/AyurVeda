import React, { useContext } from 'react'
import CartContext from './CartContext'

export default function OrderSummary() {
  const { cartTotal } = useContext(CartContext)

  return (
    <div class=" p-4">
      <h2 class="font-bold text-lg mb-4 pb-2 pt-2">Order Summary</h2>
      <div class="flex justify-between mb-2">
        <span>Items Total</span>
        <span>Rs.{cartTotal.toFixed(2)}</span>
      </div>
      <div class="flex justify-between mb-2 pb-2">
        <span class="font-medium">Discounts</span>
        <span class="text-red-500">-Rs.100.00</span>
      </div>

      <hr class="border border-b border-gray-200 "></hr>

      <div class="flex justify-between mb-2 pt-2">
        <span class="font-bold">Subtotal</span>
        <span>Rs.{(cartTotal - 100).toFixed(2)}</span>
      </div>
      <div class="flex justify-between mb-2 pb-2">
        <span>
          Shipping <br></br>
          <span class="text-[12px] border-gray-50">
            Duties & Taxes may be collected at delivery.
          </span>
        </span>
        <span>$5.99</span>
      </div>

      <hr class="border border-b border-gray-200 "></hr>

      <div class="flex justify-between font-bold pt-2">
        <span>Total:</span>
        <span>Rs.{(cartTotal - 100).toFixed(2)}</span>
      </div>
      <button class="bg-green-600 text-white px-4 py-2 mt-4 rounded hover:bg-green-700 h-11 w-80">
        Checkout
      </button>
    </div>
  )
}

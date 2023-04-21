import React from 'react'

export default function orderSummary() {
  return (
    <div class=" p-4">
      <h2 class="font-bold text-lg mb-4">Order Summary</h2>
      <div class="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>$99.99</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Tax:</span>
        <span>$9.99</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>$5.99</span>
      </div>
      <div class="flex justify-between font-bold">
        <span>Total:</span>
        <span>$115.97</span>
      </div>
      <button class="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
        Checkout
      </button>
    </div>
  )
}

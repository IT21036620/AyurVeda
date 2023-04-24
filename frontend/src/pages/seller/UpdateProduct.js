import React from 'react'
import './form.css'

const UpdateProduct = () => {
  return (
    <div className="main-form">
      <div className="form-title">
        <h2
          className="form-h2"
          class="ml-2 font-mono text-3xl font-semibold text-gray-500 dark:text-gray-400"
        >
          Update Product
        </h2>
        <div className="form-underline"></div>
      </div>

      <div className="form-body">
        <div className="form-container">
          <form action="#">
            <div className="form first">
              <div className="details-personal">
                <div className="fields">
                  <div className="input-field">
                    <label>Product Name</label>
                    <input
                      type="text"
                      placeholder="UpdateUpdate Product Name"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Manufacturer</label>
                    <input
                      type="text"
                      placeholder="UpdateUpdate Manufacturer Name"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Price</label>
                    <input
                      type="number"
                      placeholder="UpdateUpdate Price in LKR"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Package Quantity</label>
                    <input
                      type="number"
                      placeholder="Update Package Quantity"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Shipping Weight</label>
                    <input
                      type="text"
                      placeholder="Update Shipping Weight in Grams"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    {/*  dropdown */}
                    <label>Category</label>
                    <input
                      type="number"
                      placeholder="Choose New Product Category"
                      required
                    ></input>
                  </div>

                  <div className="input-field">
                    <label>Product Image</label>
                    <input
                      type="file"
                      accept="image/png, image/jpg, image/jpeg"
                      placeholder="Upload New Product Image"
                      required
                    ></input>
                  </div>

                  <div className="input-field-desc">
                    <label>Product Description</label>
                    <div></div>
                    <textarea
                      type="text"
                      placeholder="Update Product Description"
                      required
                    ></textarea>
                  </div>

                  <button class="m-auto bg-green-500 mt-[20px] hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct

import React, { useState } from 'react'
import './form.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/navbar'

const updateProductUrl = 'http://localhost:3008/api/v1/products'

const UpdateProduct = () => {
  const { id } = useParams()
  const [product_name, setProduct_name] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [price, setPrice] = useState('')
  const [package_quantity, setPackage_quantity] = useState('')
  const [shipping_weight, setShipping_weight] = useState('')
  const [availability, setAvailability] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()

    try {
      const resp = await axios.patch(
        `${updateProductUrl}/${id}`,
        {
          product_name: product_name,
          manufacturer: manufacturer,
          price: price,
          package_quantity: package_quantity,
          shipping_weight: shipping_weight,
          availability: availability,
          category: category,
          image: image,
          description: description,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      alert('Product Updated Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Product Updation Failed...')
      console.log(error.response)
    }
  }

  return (
    <div>
      {/* <Navbar name="Iverson" /> */}
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
            <form onSubmit={handleUpdateSubmit}>
              <div className="form first">
                <div className="details-personal">
                  <div className="fields">
                    <div className="input-field">
                      <label htmlFor="product_name">Product Name</label>
                      <input
                        type="text"
                        name="product_name"
                        id="product_name"
                        value={product_name}
                        onChange={(e) => setProduct_name(e.target.value)}
                        placeholder="Update Product Name"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="manufacturer">Manufacturer</label>
                      <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        value={manufacturer}
                        onChange={(e) => setManufacturer(e.target.value)}
                        placeholder="Update Manufacturer Name"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        name="price"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Update Price in LKR"
                        min={1}
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="package_quantity">Package Quantity</label>
                      <input
                        type="number"
                        name="package_quantity"
                        id="package_quantity"
                        value={package_quantity}
                        onChange={(e) => setPackage_quantity(e.target.value)}
                        placeholder="Update Package Quantity"
                        min={1}
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="shipping_weight">Shipping Weight</label>
                      <input
                        type="text"
                        name="shipping_weight"
                        id="shipping_weight"
                        value={shipping_weight}
                        onChange={(e) => setShipping_weight(e.target.value)}
                        placeholder="Update Shipping Weight in g/kg"
                      ></input>
                    </div>

                    <div className="input-field">
                      <label htmlFor="availability">Product Availability</label>
                      <select
                        name="availability"
                        id="availability"
                        value={availability}
                        onChange={(e) => setAvailability(e.target.value)}
                      >
                        <option value="true">Available</option>
                        <option value="false">Sold-Out</option>
                      </select>
                    </div>

                    <div className="input-field">
                      <label htmlFor="category">Category</label>
                      <select
                        name="category"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="Supplements & Herbs">
                          Supplements & Herbs
                        </option>
                        <option value="Sports Nutrition">
                          Sports Nutrition
                        </option>
                        <option value="Beauty">Beauty</option>
                        <option value="Bath & Personal Care">
                          Bath & Personal Care
                        </option>
                        <option value="Grocery">Grocery</option>
                        <option value="Home">Home</option>
                        <option value="Pets">Pets</option>
                        <option value="Babies & Kids">Babies & Kids</option>
                      </select>
                    </div>

                    <div className="input-field">
                      <label htmlFor="image">Product Image</label>
                      <input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        name="image"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Upload New Product Image"
                      ></input>
                    </div>

                    <div className="input-field-desc">
                      <label htmlFor="description">Product Description</label>
                      <div></div>
                      <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Update Product Description"
                      ></textarea>
                    </div>

                    <button
                      class="m-auto bg-green-500 mt-[20px] hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded"
                      type="submit"
                      name="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProduct

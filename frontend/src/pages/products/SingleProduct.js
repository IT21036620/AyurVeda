import React, { useEffect } from 'react'
import Loading from '../../components/products/Loading'
import { useParams, Link } from 'react-router-dom'
import { Grid, Button, Container, Typography, Input } from '@mui/material'
import { FaShoppingCart } from 'react-icons/fa'
import './sinProduct.css'
import { useGlobalContext } from './context'
import axios from 'axios'
import Navbar from '../../components/navbar'

const url = 'http://localhost:3008/api/v1/products/singleProduct/'
const productRating = 'http://localhost:3008/api/v1/products/productRating/'
const sellerRating = 'http://localhost:3008/api/v1/seller/sellerRating/'
const sellerUrl = 'http://localhost:3008/api/v1/seller/'
const cartUrl = 'http://localhost:3003/api/v1/cart'

const createMarkup = (text) => {
  return { __html: text }
}

const SingleProduct = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [product, setProduct] = React.useState(null)
  const [quantity, setQuantity] = React.useState(1)
  const [newRating, setNewRating] = React.useState('')
  const [rate_seller, setRate_seller] = React.useState('')
  const [newSellerRating, setNewSellerRating] = React.useState('')
  const [sRateCount, setSRateCount] = React.useState('')

  React.useEffect(() => {
    setLoading(true)
    async function getProduct() {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        console.log(data.product)
        // const data = response
        if (data.product) {
          const {
            availability: availability,
            rating: rating,
            product_name: product_name,
            manufacturer: manufacturer,
            package_quantity: package_quantity,
            price: price,
            mfd: mfd,
            exp: exp,
            shipping_weight: shipping_weight,
            category: category,
            description: description,
            image: image,
            rate_count: rate_count,
            createdBy: createdBy,
            rate_aggregate: rate_aggregate,
          } = data.product

          const newProduct = {
            availability,
            rating,
            product_name,
            manufacturer,
            package_quantity,
            price,
            mfd,
            exp,
            shipping_weight,
            category,
            description,
            image,
            rate_count,
            createdBy,
            rate_aggregate,
          }
          setProduct(newProduct)
        } else {
          setProduct(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getProduct()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!product) {
    return <h2 className="section-title">No Product to display</h2>
  }
  const {
    product_name,
    image,
    category,
    description,
    price,
    manufacturer,
    rating,
    rate_count,
    package_quantity,
    mfd,
    exp,
    shipping_weight,
    createdBy,
    rate_aggregate,
  } = product

  console.log(createdBy)

  const inputProps = {
    min: 1,
    max: 5,
  }

  const rateProduct = () => {
    axios
      .patch(`${productRating}${id}`, {
        rating: newRating,
      })
      .then(({ data }) => {
        console.log(data)
      })
  }

  const rateSeller = () => {
    axios
      .patch(`${sellerRating}${createdBy}`, {
        rating: rate_seller,
      })
      .then(({ data }) => {
        console.log(data)
      })
  }

  const fetchSeller = async () => {
    try {
      const response = await axios(`${sellerUrl}${createdBy}`)
      console.log(response)
      setNewSellerRating(response.data.seller.rating)
      setSRateCount(response.data.seller.rate_count)
    } catch (error) {
      console.log(error.response)
    }
  }

  // console.log(window.location.href.substring(0, 21))
  // console.log(window.location.port) //3000
  // console.log(window.location.protocol) // http:
  // console.log(window.location.hostname) //localhost

  const http = window.location.protocol
  const domain = window.location.hostname
  const port = window.location.port

  const urlll = `${http}\/\/${domain}:${port}\/`
  console.log(urlll)

  const handleQuantity = (param) => {
    if (param === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1)
    }
    if (param === 'increase' && quantity < 25) {
      setQuantity(quantity + 1)
    }
  }

  const addToCart = async (e) => {
    e.preventDefault()
    try {
      const resp = await axios.post(
        cartUrl,
        {
          user: '5',
          product: id,
          quantity: quantity,
          price: price,
        },
        {
          headers: {
            // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDM5OWRmNDBmMDhjYjYyNjg5MmQ3ZGQiLCJuYW1lIjoiIiwiaWF0IjoxNjgyODY3Mzg4LCJleHAiOjE2ODU0NTkzODh9.oAAzQNJhV9Oh32BV_hiU1zFoxYlBpa_4W2qJSSotTdw`,
            'Content-Type': 'application/json',
          },
        }
      )
      alert('Product Added to Cart Successfully')
      console.log(resp.data)
    } catch (error) {
      alert('Sorry! Product Add to Cart Failed...')
      console.log(error.response)
    }
  }

  return (
    <div className="single-product-container">
      {/* <Navbar name="Sunil Perera" /> */}
      <div>
        <Container className="product-view">
          <Grid container spacing={4}>
            <div onLoad={fetchSeller()}></div>
            <Grid item xs={12} md={8} className="image-wrapper">
              <img
                onLoad={() => {
                  setLoading(false)
                }}
                crossOrigin="anonymous"
                src={image}
                alt={product_name}
              />
            </Grid>
            <Grid item xs={12} md={4} className="text">
              <Typography variant="h2">{product_name}</Typography>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography class="font-bold" variant="h4">
                    {description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">Category: {category}</Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Package Quantity: {package_quantity}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Shipping Weight: {shipping_weight}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Mfd: {mfd.substring(0, 10)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Exp: {exp.substring(0, 10)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Manufacturer: {manufacturer}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Product rating: {rating}/5 ({rate_count})
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h4">
                    Seller rating: {newSellerRating}/5 ({sRateCount})
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    className="rate-product"
                    type="submit"
                    onClick={() => {
                      rateProduct()
                      setLoading(true)
                      window.location.reload(true)
                      setLoading(false)
                    }}
                  >
                    Rate Product
                  </Button>
                </Grid>
              </Grid>
              <Input
                type="number"
                placeholder="Rate Product"
                id="newRating"
                name="newRating"
                defaultValue={5}
                disableUnderline={false}
                inputProps={inputProps}
                value={newRating}
                onChange={(e) => setNewRating(e.target.value)}
                className="w-[127px]"
              ></Input>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    className="rate-seller"
                    onClick={() => {
                      rateSeller()
                      setLoading(true)
                      window.location.reload(true)
                      setLoading(false)
                    }}
                  >
                    Rate Seller
                  </Button>
                </Grid>
              </Grid>
              <Input
                type="number"
                placeholder="Rate Seller"
                id="rate_seller"
                name="rate_seller"
                defaultValue={5}
                disableUnderline={false}
                inputProps={inputProps}
                value={rate_seller}
                onChange={(e) => setRate_seller(e.target.value)}
                className="w-[127px]"
              ></Input>
              <Typography variant="h3">Price: LKR.{price}.00</Typography>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Button
                    size="small"
                    variant="contained"
                    className="increase-product-quantity"
                    onClick={() => {
                      handleQuantity('increase')
                    }}
                  >
                    +
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="quantity" variant="h3">
                    Quantity: {quantity}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    size="small"
                    color="secondary"
                    variant="contained"
                    onClick={() => {
                      handleQuantity('decrease')
                    }}
                  >
                    -
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    size="large"
                    className="custom-button"
                    onClick={addToCart}
                  >
                    <FaShoppingCart /> Add to cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
export default SingleProduct

import React, { useEffect } from 'react'
import Loading from '../../components/products/Loading'
import { useParams } from 'react-router-dom'
import { Grid, Container, Typography } from '@mui/material'
// import './page.css'
import './sinProduct.css'
import { useGlobalContext } from './context'
import axios from 'axios'

const url = 'http://localhost:3008/api/v1/products/singleProduct/'

const SingleProduct = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [product, setProduct] = React.useState(null)

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
  } = product

  console.log(createdBy)

  // console.log(window.location.href.substring(0, 21))
  // console.log(window.location.port) //3000
  // console.log(window.location.protocol) // http:
  // console.log(window.location.hostname) //localhost

  const http = window.location.protocol
  const domain = window.location.hostname
  const port = window.location.port

  const urlll = `${http}\/\/${domain}:${port}\/`
  console.log(urlll)

  return (
    <Container className="product-view">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className="image-wrapper">
          <img
            onLoad={() => {
              setLoading(false)
            }}
            crossOrigin="anonymous"
            // src={`${http}\/\/${domain}:3008\/${image}`}
            src={`http:\/\/localhost:3008\/${image}`}
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
              <Typography variant="h4">Mfd: {mfd.substring(0, 10)}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4">Exp: {exp.substring(0, 10)}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4">Manufacturer: {manufacturer}</Typography>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4">
                Product rating: {rating}/5 ({rate_count})
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="h3">Price: LKR.{price}.00</Typography>
          <Grid container spacing={4}></Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
export default SingleProduct

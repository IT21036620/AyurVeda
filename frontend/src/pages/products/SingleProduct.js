import React, { useEffect } from 'react'
import Loading from '../../components/products/Loading'
import { useParams, Link } from 'react-router-dom'
import { Grid, Button, Container, Typography, Input } from '@mui/material'
import { FaShoppingCart } from 'react-icons/fa'
import './sinProduct.css'
import { useGlobalContext } from './context'
import axios from 'axios'

const url = 'http://localhost:4000/api/v1/products/singleProduct/'
const productRating = 'http://localhost:4000/api/v1/products/productRating/'

const createMarkup = (text) => {
  return { __html: text }
}

const SingleProduct = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [product, setProduct] = React.useState(null)
  const [quantity, setQuantity] = React.useState(1)
  // const [productRate, setProductRate] = React.useState('')
  // const [editProduct, setEditProduct] = React.useState({ rating: '' })

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

  const inputProps = {
    min: 1,
    max: 5,
  }

  // const onChangeProduct = (event) => {
  //   setProductRating(event.target.value)
  // }

  const rateProduct = () => {
    // setEditProduct(product)
    // setEditProduct({ rating: productRate })
    // setProduct({ rating: productRate })
    axios.patch(`${productRating}${id}`, product).then(({ data }) => {
      console.log(data)
    })
  }

  // React.useEffect(()=>{

  // },rating)

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
  // const addProduct = async(id, product_name, quantity, price)=> {
  //   const response = await cart.add(id,quantity, product_name, price)
  //   setCart(response.cart)
  // }
  // console.log(productRating)

  return (
    // <section className="section product-section">
    //   <div>
    //     <Link
    //       to="/products"
    //       class="font-sans bg-[rgb(33,190,33)] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
    //     >
    //       back to products
    //     </Link>
    //   </div>
    //   <h2 className="section-title">{product_name}</h2>
    //   <div className="drink">
    //     <img
    //       crossOrigin="anonymous"
    //       src={`http:\/\/localhost:4000\/${image}`}
    //       alt={product_name}
    //     ></img>
    //     <div className="drink-info">
    //       <p>
    //         <span className="drink-data">Product Name :</span>
    //         {product_name}
    //       </p>
    //       <p>
    //         <span className="drink-data">description :</span>
    //         {description}
    //       </p>
    //       <p>
    //         <span className="drink-data">category :</span>
    //         {category}
    //       </p>
    //       <p>
    //         <span className="drink-data">package_quantity :</span>
    //         {package_quantity}
    //       </p>
    //       <p>
    //         <span className="drink-data">price :</span>
    //         Rs.{price}.00
    //       </p>
    //       <p>
    //         <span className="drink-data">manufacturer :</span>
    //         {manufacturer}
    //       </p>
    //       <p>
    //         <span className="drink-data">rating :</span>
    //         {rating}/5 ({rate_count} ratings)
    //       </p>
    //       <p>
    //         <span className="drink-data">shipping_weight :</span>
    //         {shipping_weight}
    //       </p>
    //       <p>
    //         <span className="drink-data">mfd :</span>
    //         {mfd.substring(0, 10)}
    //       </p>
    //       <p>
    //         <span className="drink-data">exp :</span>
    //         {exp.substring(0, 10)}
    //       </p>
    //     </div>
    //   </div>
    // </section>

    <Container className="product-view">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} className="image-wrapper">
          <img
            onLoad={() => {
              setLoading(false)
            }}
            crossOrigin="anonymous"
            // src={`${http}\/\/${domain}:4000\/${image}`}
            src={`http:\/\/localhost:4000\/${image}`}
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
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                className="rate-product"
                onClick={() => {
                  // rateProduct()
                  setLoading(true)
                  window.location.reload(true)
                  setLoading(false)
                }}
                // onClick={rateProduct()}
              >
                Rate Product
              </Button>
            </Grid>
          </Grid>
          <Input
            type="number"
            placeholder="Rate Product"
            id="rate_product"
            name="rate_product"
            defaultValue={5}
            disableUnderline={false}
            inputProps={inputProps}
            // onChange={(e) => setProductRate(e.target.value)}
          ></Input>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                className="rate-seller"
                onClick={() => {
                  // rateSeller()
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
                // onClick={()=>{
                //   addProduct(id,product_name,price,quantity);
                // }}
              >
                <FaShoppingCart /> Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
export default SingleProduct

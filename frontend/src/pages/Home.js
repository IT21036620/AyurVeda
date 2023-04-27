import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Home = () => {
  return (
    <div>
      <Navbar name={'Sunil Perera'} />
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src="img/01.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="path/to/image2.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="path/to/image3.jpg" alt="Slide 3" />
        </div>
      </Carousel>

      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))} */}
        </div>
      </div>
    </div>
  )
}

export default Home

import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/navbar'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
import HomeReview from '../components/HomeReview/HomeReview'

const Home = () => {
  return (
    <div>
      <Carousel
        autoPlay
        interval={5000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img class="h-[600px]" src={img} alt="Slide 1" />
        </div>
        <div>
          <img class="h-[600px]" src={img2} alt="Slide 2" />
        </div>
        <div>
          <img class="h-[600px]" src={img3} alt="Slide 3" />
        </div>
      </Carousel>

      <HomeReview />
    </div>
  )
}

export default Home

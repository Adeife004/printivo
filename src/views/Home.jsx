import HeroSection from '../component/HeroSection'
import Navbar from '../component/Navbar'
import Products from '../component/Products'
import Categories from '../component/Categories'
import Shop from '../component/Shop'
import Testimonial from '../component/Testimonial'
import Count from '../component/Count'
import Works from '../component/Works'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>  
    <div>
        <Navbar />
        <HeroSection />
        <Products />
        <Categories />
        <Shop />
        <Testimonial />
        <Count />
        <Works />
        <Footer />
    </div>
    </>
  )
}

export default Home
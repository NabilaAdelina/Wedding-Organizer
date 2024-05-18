import Navbar from './LandingLayout/Navbar'
import Hero from './LandingLayout/Hero'
import Footer from '../../components/Footer'
import Venue from './LandingLayout/Venue'
import Service from './LandingLayout/Service'
import Portfolio from './LandingLayout/Portfolio'
import Testimonials from './LandingLayout/Testimonials'

const LandingPage = () => {
    return (
        <div className=' position: relative'>
            <Navbar />
            <Hero />
            <Venue />
            <Service />
            <Portfolio />
            <Testimonials />
            <Footer />
        </div >
    )
}

export default LandingPage



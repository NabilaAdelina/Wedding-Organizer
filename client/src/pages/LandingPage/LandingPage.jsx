import Navbar from './LandingLayout/Navbar'
import Hero from './LandingLayout/Hero'
import Footer from '../../components/Footer'
import Venue from './LandingLayout/Venue'
import Service from './LandingLayout/Service'
import Portfolio from './LandingLayout/Portfolio'
import Testimonials from './LandingLayout/Testimonials'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LandingPage = () => {
    const token = localStorage.getItem('token');
    const user = token ? JSON.parse(atob(token.split('.')[1])) : null;
    const navigate = useNavigate()

    useEffect(() => {
        if (user && user.role === 'admin') {
            navigate('/fa1', { replace: true });
        }
    }, [user, navigate]);

    return (
        <div className='position: relative'>
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



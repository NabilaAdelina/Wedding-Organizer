import logoFooter from "../assets/logo/logo-footer.png"
import { Link } from 'react-router-dom'
import facebook from '../assets/logo/facebook.svg'
import instagram from '../assets/logo/instagram.svg'
import twitter from '../assets/logo/twitter.svg'

const Footer = () => {
    return (
        <footer>
            <div className='bg-neutral4 px-[200px] flex justify-between items-center'>
                <img src={logoFooter} alt="" />
                <div>
                    <ul className="text-neutral3 flex gap-3">
                        <Link>About Us</Link>
                        <Link>Terms of Service</Link>
                        <Link>Privacy Policy</Link>
                        <Link>FAQ</Link>
                    </ul>
                </div>
                <div className="flex gap-3">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer

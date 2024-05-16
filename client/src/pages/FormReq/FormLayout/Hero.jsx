import React from 'react'
import heroimg from "../../../assets/images/hero-img.png"
import { Link } from 'react-router-dom'
const Hero = () => {
    const linkNav = [{
        id: 1,
        name: "Concept",
        path: "/concept"
    }, {
        id: 2,
        name: "Schedule",
        path: "/schedule"
    }, {
        id: 3,
        name: "Cost Plan",
        path: "/costplan"
    }]

    return (
        <section className='h-[978px] bg-contain flex justify-center items-center' style={{
            backgroundImage: `url(${heroimg})`, backgroundSize: '100% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='text-center flex flex-col gap-5 items-center'>
                <div>
                    <p className='font-boska font-bold text-[56px] text-primary2 w-[818px]'>Turning Your Wedding Dreams
                        Into Ultimate Reality</p>
                </div>
                <p className='font-switzer text-neutral-300 mb-10'>
                    Crafting every detail to shape your perfect wedding day
                </p>
                <Link to="/form" className='px-[26px] py-[13px] w-[199px] bg-neutral1 text-primary1 font-bold rounded-md'>Form Planning</Link>
            </div>
        </section>
    )
}

export default Hero

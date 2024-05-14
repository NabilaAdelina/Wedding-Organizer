import React from 'react'
import heroimg from "../../../assets/images/hero-img.png"
const Hero = () => {
    return (
        <section className='h-[978px] bg-contain flex justify-center items-center' style={{
            backgroundImage: `url(${heroimg})`, backgroundSize: '100% auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='text-center flex flex-col gap-5'>
                <div>
                    <p className='font-boska font-bold text-[56px] text-primary2 w-[818px]'>Turning Your Wedding Dreams
                        Into Ultimate Reality</p>
                </div>
                <p className='font-switzer text-neutral-300'>
                    Crafting every detail to shape your perfect wedding day
                </p>
            </div>
        </section>
    )
}

export default Hero

import React from 'react'
import Navbar from './LandingLayout/Navbar'
import bgcontent from "../../assets/images/bg-content.png"
import bgservice from "../../assets/images/bg-service.png"
import service1 from "../../assets/images/service1.png"
import portfolio1 from "../../assets/images/portfolio1.png"
import Location from './LandingLayout/Location'
import location1 from "../../assets/images/location1.png"
import featured from "../../assets/images/featured-img.png"
import Hero from './LandingLayout/Hero'
import ServiceCard from './LandingLayout/ServiceCard'



const LandingPage = () => {
    return (
        <div className='h-[4000px] w-[1440px] position: relative'>
            <Navbar />
            <Hero />
            <section className='h-[985px] mt-[-100px]' style={{
                backgroundImage: `url(${bgcontent})`, backgroundSize: '100% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='flex flex-col px-[200px] pt-[100px] gap-[47px]'>
                    <div className='text-center mb-4'>
                        <h1 className='text-[32px] font-boska font-bold text-neutral4'>Venue Selection</h1>
                        <p className='text-neutral3 font-switzer'>bahwa kamu akan mengingatnya selamanya</p>
                    </div>
                    <div className='grid grid-cols-4 gap-4'>
                        <Location
                            name="Florence"
                            url={location1}
                        />
                        <Location
                            name="Florence"
                            url={location1}
                        />
                        <Location
                            name="Florence"
                            url={location1}
                        />
                        <Location
                            name="Florence"
                            url={location1}
                        />
                        <Location
                            name="Florence"
                            url={location1}
                        />
                        <Location
                            name="Florence"
                            url={location1}
                        />
                        <Location
                            name="Florence"
                            url={location1}
                        />
                        <Location
                            name="Florence"
                            url={location1}
                        />
                    </div>
                    <div>
                        <h1 className='font-semibold mb-3'>Featured venues</h1>
                        <div className='flex'>
                            <img src={featured} alt="" />
                            <div className='bg-neutral4 px-[48px] py-[32px] w-[679px] flex flex-col justify-center'>
                                <p className='font-boska font-bold text-[32px] text-primary2'>Villa Balbianello</p>
                                <p className='text-primary5 font-semibold text-[14px] mb-4'>Lake Como</p>
                                <div className='flex flex-col gap-4'>
                                    <p className='text-neutral2'>Ahe whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.
                                    </p>
                                    <p className='text-neutral2'>Ahe whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='h-[547px] mt-[60px] flex justify-center items-center' style={{
                backgroundImage: `url(${bgservice})`, backgroundSize: '100% auto'
            }}>
                <div className='w-[1100px] bg-neutral1 px-6 py-5 rounded-lg flex mt-14'>
                    <div>
                        <p className='text-[32px] font-boska text-neutral4 font-bold'>Services</p>
                        <p className='text-neutral3 text-[16px] w-[214px]'>to plan and orchestrate your special occasion</p>
                    </div>
                    <div>
                        <div className='w-[243px] h-[296px]' style={{
                            backgroundImage: `url(${service1})`, backgroundSize: '100% auto'
                        }}>
                            <p>hi</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='px-[200px] py-[50px]'>
                    <p className='text-neutral4 font-semibold text-[20px] mb-5'>Our portfolios</p>
                    <div className='grid grid-cols-2 gap-4'>
                        <ServiceCard
                            name="Joy & Jordan"
                            url={portfolio1}
                        />
                        <ServiceCard
                            name="Joy & Jordan"
                            url={portfolio1}
                        />
                        <ServiceCard
                            name="Joy & Jordan"
                            url={portfolio1}
                        />
                        <ServiceCard
                            name="Joy & Jordan"
                            url={portfolio1}
                        />
                    </div>
                </div>
            </section>
        </div >
    )
}

export default LandingPage



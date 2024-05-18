import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const FormReq = () => {
    return (
        <>
        <Header />
            <div class="w-[1440px] h-[1842px] relative">
                <div class="w-[1440px] h-[1842px] left-0 top-0 absolute bg-white"></div>
                <div class="h-20 left-0 top-[1762px] absolute bg-neutral-700 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div class="w-[1440px] h-20 px-[200px] py-4 justify-between items-center inline-flex">
                        <div className="justify-start items-start gap-2 flex">
                            <div className="w-6 h-6 p-0.5 justify-center items-center flex"></div>
                            <div className="w-6 h-6 relative"></div>
                            <div className="w-6 h-6 px-0.5 py-[3.87px] justify-center items-center flex"></div>
                        </div>
                    </div>
                </div>
                <div className="w-[602px] h-[126px] left-[411px] top-[211px] absolute">
                    <div className="left-[124px] top-0 absolute text-neutral-700 text-[55px] font-bold font-['Boska'] leading-normal tracking-widest">Form Planning</div>
                    <div className="w-[602px] h-[26px] left-7 top-[85px] absolute text-neutral-400 text-2xl font-normal font-['Switzer'] leading-normal tracking-wide">We’d love to hear from you. Please fill out this form.</div>
                    <div className="w-[268px] h-[0px] left-[170px] top-[140px] absolute border border-neutral-400"></div>
                </div>
                <form className="left-[66px] top-[412px] absolute">
                    <div className="w-[1289px]">
                        <div className="flex flex-col">
                            <label htmlFor="firstName" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">First Name</label>
                            <input id="firstName" className="w-[1287px] h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3 mb-6" type="text" placeholder="First Name" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="lastName" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Last Name</label>
                            <input id="lastName" className="w-[1287px] h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3 mb-6" type="text" placeholder="Last Name" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Email</label>
                            <input id="email" className="w-[1287px] h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3 mb-6" type="text" placeholder="Email" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phoneNumber" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Phone Number</label>
                            <input id="phoneNumber" className="w-[1287px] h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3 mb-6" type="text" placeholder="Phone Number" />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="planningConcept" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Planning Concept</label>
                            <textarea
                                id="planningConcept"
                                className="w-[1287px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3 mb-6"
                                placeholder="Tulis konsep awal pernikahan yang anda inginkan, sertakan juga tanggal hari H dan kasaran budget anda!"
                                style={{ height: '300px' }}
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full h-[93px] bg-zinc-500 text-white text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide rounded-[14px] px-6 py-3 mt-6">
                        Submit
                    </button>
                </form>
                <div className="w-full max-w-[1289px] px-4 text-left mb-12">
                    <div className="text-neutral-700 text-xl font-bold font-['Switzer'] underline leading-normal tracking-wide">
                        Note: Pastikan semua data telah diisi dengan benar!
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default FormReq

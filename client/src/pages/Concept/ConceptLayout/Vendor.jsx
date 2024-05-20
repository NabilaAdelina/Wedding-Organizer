import React from 'react'
import VendorCard from './VendorCard'
// import decoration from "../../../assets/images/decoration-1.png"
import ImageVendor from '../../../assets/images/vendor-1.png'


const Vendor = () => {
    return (
      <>
      <section className='flex flex-col bg-primary1 items-center px-[200px] pt-[50px] gap-[50px] pb-[100px]'>
      <div className='text-center mb-4'>
        <h1 className='text-[60px] font-boska font-bold text-primary4 mb-5'>Vendor Acara</h1>
        <div className='grid grid-cols-3 gap-[65px]'>
          <VendorCard 
          name="" url={ImageVendor} deskripsi=<p>"Lorem ipsum"</p>
          />
          <VendorCard 
          name="" url={ImageVendor} deskripsi=<p>"Lorem ipsum"</p>
          />
          <VendorCard 
          name="" url={ImageVendor} deskripsi=<p>"Lorem ipsum"</p>
          />
        </div>
      </div>
      </section>
      </>
    )
}
export default Vendor
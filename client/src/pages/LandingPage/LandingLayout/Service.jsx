import bgservice from "../../../assets/images/bg-service.png"
import ServiceCard from "./ServiceCard"
import service1 from "../../../assets/images/service1.png"

const Service = () => {
    return (

        <section className='h-[547px] mt-[60px] flex justify-center items-center' style={{
            backgroundImage: `url(${bgservice})`, backgroundSize: '100% auto'
        }}>
            <div className='w-[1100px] bg-neutral1 py-3 rounded-lg flex mt-14'>
                <div className="px-8 py-6">
                    <p className='text-[32px] font-boska text-neutral4 font-bold'>Services</p>
                    <p className='text-neutral3 text-[16px] w-[214px]'>to plan and orchestrate your special occasion</p>
                </div>
                <div className='grid grid-cols-3 gap-3 px-8'>
                    <ServiceCard name="Photo" url={service1} />
                    <ServiceCard name="Photo" url={service1} />
                    <ServiceCard name="Photo" url={service1} />
                </div>
            </div>
        </section>
    )
}

export default Service

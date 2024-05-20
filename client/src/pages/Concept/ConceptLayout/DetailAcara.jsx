import bgservice from "../../../assets/images/bg-service.png"

const DetailAcara = () => {
    return (
        <>
        <section className='h-[547px] mt-[60px] flex justify-center items-center' style={{
            backgroundImage: `url(${bgservice})`, backgroundSize: 'cover'
        }}>
            <div className='w-[1000px] bg-neutral1 shadow-inner py-3 rounded-lg flex m-auto'>
                <div className="px-10 py-8">
                    <h1 className='text-[42px] font-boska text-neutral4 font-bold'>Detail Acara:</h1>
                    <div>
                        <p className='text-neutral3 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde temporibus iure officiis ipsam doloribus nisi vero! Dolore, reprehenderit aliquid ducimus dolorum omnis, fugiat dicta, natus earum atque dignissimos itaque!
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut modi amet quisquam perspiciatis. Repudiandae, reiciendis earum cupiditate beatae, ut ullam aperiam labore rerum dignissimos minus in quia reprehenderit officia aut.</p>
                    </div>
                    <div>
                        <br />
                        <a href="#" className="text-center text-[16px] font-switzer font-bold text-blue-500">Ajukan perubahan </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DetailAcara
import React from 'react'
import { Carousel } from 'flowbite-react'

const WeddingDress = () => {
    return (
        <>
            <section className='flex flex-col mt-[80px] bg-primary1 items-center p-auto'>
                <div className='flex flex-row m-[150px] px-[200px]'>
                    <div className='grid grid-cols-1 mr-10 align-middle gap-5'>
                            <img className='rounded-lg w-[150px]' src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img className='rounded-lg w-[150px]' src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img className='rounded-lg w-[150px]' src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img className='rounded-lg w-[150px]' src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img className='rounded-lg w-[150px]' src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img className='rounded-lg w-[150px]' src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img className='rounded-lg w-[150px]' src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                    </div>
                    <div className='flex flex-row mr-[100px] p-auto'>
                        <Carousel className='w-[600px]'>
                            <img src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                            <img src="./src/assets/images/wed-dress.png" alt="Wedding Dress" />
                        </Carousel>
                    </div>
                    <div>
                        <div className='flex flex-col text-left'>
                            <h1 className='text-[50px] font-switzer font-bold text-neutral5'>Wedding Dress</h1>
                            <h2 className='text-[42px] font-switzer font-bold text-neutral5 mb-5'>Rp 2.000.000</h2>
                            <p className='text-neutral4 text-[16px]'>Gaun V-neck</p>
                            <p className='text-neutral4 text-[16px]'>Jenis gaun Body-hugging</p>
                            <p className='text-neutral4 text-[16px]'>Tekstur mewah dan kilauan alami, menjadi pilihan populer untuk gaun pengantin karena keanggunannya dan alirannya.</p>
                        </div>
                        <div className='pt-[320px]'>
                            <div className='flex flex-col text-left'>
                                <ul className='text-neutral4 text-[16px]'>
                                    <li className='border-b border-neutral1 py-2'>Ukuran : L</li>
                                    <li className='border-b border-neutral1 py-2'>Warna : Putih</li>
                                    <li className=' py-2'>Komposisi : -</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeddingDress
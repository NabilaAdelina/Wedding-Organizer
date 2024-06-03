import React, { useState } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';

const RincianAdmin2 = () => {
    const [popUp, setPopUp] = useState(false);

    const [formData, setFormData] = useState({
        uraian: "",
        uraian: '',
        vol: '',
        hargaAwal: '',
        jumlah: '',
        keterangan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        console.log(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    const PopUpForm = () => {
        return (
            <div className='z-30 absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
                <form onSubmit={handleSubmit} action="" className='bg-white p-12 rounded-xl w-[700px]'>
                    <div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Uraian</label>
                                <input onChange={handleChange} name='uraian' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Vol</label>
                                <input onChange={handleChange} name='vol' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Harga Awal</label>
                                <input onChange={handleChange} name='hargaAwal' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Jumlah</label>
                                <input onChange={handleChange} name='jumlah' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Keterangan</label>
                                <input onChange={handleChange} name='keterangan' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 mt-[50px] '>
                        <input type="submit" value="Tambah Data" className='px-5 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center' />
                        <button type="button" className='bg-neutral2 px-5 py-3 rounded-[8px] text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                    </div>
                </form>
            </div>
        );
    };


    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Rincian Anggaran</h1>
                    </div>
                    <div className="mt-6">
                        <button onClick={() => setPopUp(true)} className="bg-zinc-500 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75 mb-6">
                            Tambah Data
                        </button>
                        <div className="mt-6">
                            <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                                <div className="flex justify-between items-center p-4 text-xs font-normal text-gray-400">
                                    <div className="w-8">No</div>
                                    <div className="w-48">Uraian</div>
                                    <div className="w-36">Vol</div>
                                    <div className="w-36">Harga Awal</div>
                                    <div className="w-36">Jumlah</div>
                                    <div className="w-36">Keterangan</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200">
                            <div className="flex justify-between items-center p-4">
                                <div className="w-8 text-gray-900">1</div>
                                <div className="w-48 text-gray-900">Catering Prasmanan</div>
                                <div className="w-36 text-slate-800">100 Porsi</div>
                                <div className="w-36 text-slate-800">Rp25.000/pax</div>
                                <div className="w-36 text-slate-800">Rp3.500.000</div>
                                <div className="w-36 text-slate-800">Konsumsi Tamu</div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200">
                            <div className="flex justify-between items-center p-4">
                                <div className="w-8 text-gray-900">2</div>
                                <div className="w-48 text-gray-900">Souvenir</div>
                                <div className="w-36 text-slate-800">100 Pcs</div>
                                <div className="w-36 text-slate-800">Rp10.000/pcs</div>
                                <div className="w-36 text-slate-800">Rp1.000.000</div>
                                <div className="w-36 text-slate-800">Keychain</div>
                            </div>
                        </div>
                        <div className="bg-white border-t-0 border border-gray-200 rounded-b-lg">
                            <div className="flex justify-between items-center p-4">
                                <div className="w-32"></div>
                                <div className="w-40"></div>
                                <div className="w-30"></div>
                                <div className="text-right text-slate-700 text-base">Rp4.500.000</div>
                                <div className="w-36 text-slate-800 font-bold">Total</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            {popUp && <PopUpForm />}
            <Footer />
        </div>
    );
};

export default RincianAdmin2;

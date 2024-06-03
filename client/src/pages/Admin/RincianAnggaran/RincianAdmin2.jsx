import React, { useState } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';

const RincianAdmin2 = () => {
    const [popUp, setPopUp] = useState(false);

    const [formData, setFormData] = useState({
        uraian: '',
        vol: '',
        hargaAwal: '',
        jumlah: '',
        keterangan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const PopUpForm = () => {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50 fixed inset-0 z-50">
                <form onSubmit={handleSubmit} className="FormRincian w-96 bg-white p-6 rounded-lg shadow-lg relative">
                    <div className="Username mb-4 flex-col justify-start items-start gap-2 flex">
                        <label className="InputTextLabel text-neutral-700 text-base font-semibold font-['Switzer'] leading-none" htmlFor="uraian">Uraian</label>
                        <input
                            id="uraian"
                            name="uraian"
                            type="text"
                            value={formData.uraian}
                            onChange={handleChange}
                            className="InputField h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex"
                            style={{ width: "calc(100% - 10px)" }} // Atur lebar input
                        />
                    </div>
                    <div className="Password mb-4 flex-col justify-start items-start gap-2 flex">
                        <label className="InputTextLabel text-neutral-700 text-base font-semibold font-['Switzer'] leading-none" htmlFor="vol">Vol</label>
                        <input
                            id="vol"
                            name="vol"
                            type="text"
                            value={formData.vol}
                            onChange={handleChange}
                            className="InputField h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex"
                            style={{ width: "calc(100% - 10px)" }} // Atur lebar input
                        />
                    </div>
                    <div className="Password mb-4 flex-col justify-start items-start gap-2 flex">
                        <label className="InputTextLabel text-neutral-700 text-base font-semibold font-['Noto Sans'] leading-none" htmlFor="hargaAwal">Harga Awal</label>
                        <input
                            id="hargaAwal"
                            name="hargaAwal"
                            type="text"
                            value={formData.hargaAwal}
                            onChange={handleChange}
                            className="InputField h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex"
                            style={{ width: "calc(100% - 10px)" }} // Atur lebar input
                        />
                    </div>
                    <div className="Password mb-4 flex-col justify-start items-start gap-2 flex">
                        <label className="InputTextLabel text-neutral-700 text-base font-semibold font-['Noto Sans'] leading-none" htmlFor="jumlah">Jumlah</label>
                        <input
                            id="jumlah"
                            name="jumlah"
                            type="text"
                            value={formData.jumlah}
                            onChange={handleChange}
                            className="InputField h-14 p-4 bg-white rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex"
                            style={{ width: "calc(100% - 10px)" }} // Atur lebar input
                        />
                    </div>
                    <div className="Password mb-4 flex-col justify-start items-start gap-2 flex">
                        <label className="InputTextLabel text-neutral-700 text-base font-semibold font-['Noto Sans'] leading-none" htmlFor="keterangan">Keterangan</label>
                        <input
                            id="keterangan"
                            name="keterangan"
                            type="text"
                            value={formData.keterangan}
                            onChange={handleChange}
                            className="InputField h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex"
                            style={{ width: "calc(100% - 10px)" }} // Atur lebar input
                        />
                    </div>
                    <div className="ButtonLandingPage mt-6 flex justify-center">
                        <button type="submit" className="px-6 py-2.5 bg-neutral-700 text-red-50 text-base font-semibold font-['Switzer'] rounded-md shadow hover:bg-neutral-800">
                            Submit
                        </button>
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

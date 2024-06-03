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
                                    <div className="w-24">Aksi</div>
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
                                <div className="w-24 flex space-x-2">
                                    <button className="p-2.5 rounded-lg bg-gray-200">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 4.99984H3.16667M3.16667 4.99984H16.5M3.16667 4.99984V16.6665C3.16667 17.1085 3.34226 17.5325 3.65482 17.845C3.96738 18.1576 4.39131 18.3332 4.83333 18.3332H13.1667C13.6087 18.3332 14.0326 18.1576 14.3452 17.845C14.6577 17.5325 14.8333 17.1085 14.8333 16.6665V4.99984H3.16667ZM5.66667 4.99984V3.33317C5.66667 2.89114 5.84226 2.46722 6.15482 2.15466C6.46738 1.8421 6.89131 1.6665 7.33333 1.6665H10.6667C11.1087 1.6665 11.5326 1.8421 11.8452 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M7.33333 9.1665V14.1665M10.6667 9.1665V14.1665" stroke="#4A5568" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="p-2.5 rounded-lg bg-gray-200">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#4A5568" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200">
                            <div className="flex justify-between items-center p-4">
                                <div className="w-8 text-gray-900">2</div>
                                <div className="w-48 text-gray-900">Sound System</div>
                                <div className="w-36 text-slate-800">1 Paket</div>
                                <div className="w-36 text-slate-800">Rp3.000.000</div>
                                <div className="w-36 text-slate-800">Rp3.000.000</div>
                                <div className="w-36 text-slate-800">Persewaan</div>
                                <div className="w-24 flex space-x-2">
                                    <button className="p-2.5 rounded-lg bg-gray-200">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 4.99984H3.16667M3.16667 4.99984H16.5M3.16667 4.99984V16.6665C3.16667 17.1085 3.34226 17.5325 3.65482 17.845C3.96738 18.1576 4.39131 18.3332 4.83333 18.3332H13.1667C13.6087 18.3332 14.0326 18.1576 14.3452 17.845C14.6577 17.5325 14.8333 17.1085 14.8333 16.6665V4.99984H3.16667ZM5.66667 4.99984V3.33317C5.66667 2.89114 5.84226 2.46722 6.15482 2.15466C6.46738 1.8421 6.89131 1.6665 7.33333 1.6665H10.6667C11.1087 1.6665 11.5326 1.8421 11.8452 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M7.33333 9.1665V14.1665M10.6667 9.1665V14.1665" stroke="#4A5568" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="p-2.5 rounded-lg bg-gray-200">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#4A5568" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {popUp && <PopUpForm />}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default RincianAdmin2;

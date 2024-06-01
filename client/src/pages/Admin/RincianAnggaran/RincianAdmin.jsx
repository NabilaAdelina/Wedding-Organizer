import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';

const RincianAdmin = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                    <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Rincian Anggaran</h1>
                    <p className="text-left text-zinc-800 text-base">Pilih Pelanggan</p>
                    <div className="mt-6 overflow-x-auto flex-1">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Nama Pelanggan</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Alamat</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">No. Telepon</th>
                                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="px-6 py-4 text-gray-900 text-base">John Doe</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">Perumahan X Blok A9 No.79</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">+62-365-7215-1749</td>
                                    <td className="px-6 py-4 flex space-x-2">
                                        <button className="p-2.5 rounded-lg bg-gray-200">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                        <button className="p-2.5 rounded-lg bg-gray-200">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z"></path>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                <tr className="border-t">
                                    <td className="px-6 py-4 text-gray-900 text-base">Jane Smith</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">Perumahan Y Blok B10 No.45</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">+62-134-7215-5734</td>
                                    <td className="px-6 py-4 flex space-x-2">
                                        <button className="p-2.5 rounded-lg bg-gray-200">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                        </button>
                                        <button className="p-2.5 rounded-lg bg-gray-200">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z"></path>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default RincianAdmin;

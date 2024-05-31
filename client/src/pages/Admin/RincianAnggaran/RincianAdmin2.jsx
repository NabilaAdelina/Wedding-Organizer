import React from 'react';
import { Link } from 'react-router-dom';

const RincianAdmin2 = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <nav className="bg-neutral-700 p-4 flex justify-between items-center">
                <img className="w-14 h-14" src="https://via.placeholder.com/60x60" alt="Placeholder" />
                <div className="flex items-center space-x-4">
                    <div className="text-red-200">My Profile</div>
                    <img className="w-5 h-5" src="https://via.placeholder.com/19x19" alt="Profile" />
                </div>
            </nav>
            <div className="flex flex-1">
                <aside className="bg-white w-72 p-4 rounded-2xl m-4 flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                        <img className="w-8 h-8 rounded-full" src="https://via.placeholder.com/32x32" alt="Avatar" />
                        <div className="text-sm font-medium">Gustavo Xavier</div>
                    </div>
                    <div className="mt-4 flex flex-col space-y-2">
                        <div className="bg-gray-100 p-3 rounded-3xl flex items-center space-x-3">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="text-neutral-900 text-sm">Concept</div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-3xl flex items-center space-x-3">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="text-neutral-400 text-sm">Cost Plan</div>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-3xl flex items-center space-x-3">
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                            <div className="text-neutral-400 text-sm">Schedule</div>
                        </div>
                        <div className="mt-auto">
                            <div className="bg-gray-100 p-3 rounded-3xl flex items-center space-x-3">
                                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                                <div className="text-neutral-900 text-sm">Settings</div>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-3xl flex items-center space-x-3">
                                <div className="w-4 h-4 bg-red-700 rounded"></div>
                                <div className="text-red-700 text-sm">Log out</div>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="flex-1 p-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Rincian Anggaran</h1>
                    </div>
                    <div className="mt-6">
                        <Link to="/FormRA" className="bg-zinc-500 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75 mb-6">
                            Tambah Data
                        </Link>
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
                                <div className="w-36 text-slate-800  font-bold">Total</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <footer className="bg-neutral-700 p-4 mt-auto flex justify-between items-center">
                <img className="w-24 h-20" src="https://via.placeholder.com/92x82" alt="Placeholder" />
                <div className="flex items-center space-x-10">
                    <div className="text-neutral-400">About us</div>
                    <div className="text-neutral-400">Terms of Service</div>
                    <div className="text-neutral-400">Privacy Policy</div>
                    <div className="text-neutral-400">FAQ</div>
                </div>
                <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                </div>
            </footer>
        </div>
    );
};

export default RincianAdmin2;

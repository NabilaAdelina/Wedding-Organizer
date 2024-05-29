import React from 'react';

const RincianAdmin = () => {
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
                    <h1 className="text-center text-zinc-800 text-3xl font-bold">Rincian Anggaran</h1>
                    <p className="text-center text-zinc-800 text-base">Pilih Pelanggan</p>
                    <div className="mt-6 overflow-x-auto">
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
                                {/* Additional rows as needed */}
                            </tbody>
                        </table>
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

export default RincianAdmin;

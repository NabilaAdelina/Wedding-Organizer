import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';

const FormA2 = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Form Request</h1>
                    </div>
                    <div className="mt-6">
                        <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                            <div className="flex justify-between items-center p-4 text-xs font-normal text-gray-400">
                                <div style={{ width: '8%', padding: '8px' }}>No</div>
                                <div style={{ width: '16%', padding: '8px' }}>First</div>
                                <div style={{ width: '16%', padding: '8px' }}>Last</div>
                                <div style={{ width: '24%', padding: '8px' }}>Email</div>
                                <div style={{ width: '18%', padding: '8px' }}>Phone Number</div>
                                <div style={{ width: '18%', padding: '8px' }}>Concept</div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200">
                            <div className="flex justify-between items-center p-4">
                                <div style={{ width: '8%', padding: '8px', color: '#000' }}>1</div>
                                <div style={{ width: '16%', padding: '8px', color: '#000' }}>John</div>
                                <div style={{ width: '16%', padding: '8px', color: '#000' }}>Doe</div>
                                <div style={{ width: '24%', padding: '8px', color: '#000' }}>john.doe@example.com</div>
                                <div style={{ width: '18%', padding: '8px', color: '#374151' }}>+1234567890</div>
                                <div style={{ width: '18%', padding: '8px', color: '#374151' }}>Wedding Ceremony and Reception</div>
                            </div>
                        </div>
                        {/* Ajuan Perubahan */}
                        <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Request Change</h1>
                            </div>
                            <div className="mt-6">
                                <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                                    <div className="flex justify-between items-center p-4 text-xs font-normal text-gray-400">
                                        <div style={{ width: '8%', padding: '8px' }}>No</div>
                                        <div style={{ width: '36%', padding: '8px' }}>Tipe</div>
                                        <div style={{ width: '56%', padding: '8px' }}>Keterangan</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200">
                                <div className="flex justify-between items-center p-4">
                                    <div style={{ width: '8%', padding: '8px', color: '#000' }}>1</div>
                                    <div style={{ width: '36%', padding: '8px', color: '#000' }}>Rincian Anggaran</div>
                                    <div style={{ width: '56%', padding: '8px', color: '#000' }}>Saya ingin mengalokasikan dana dari A ke B</div>
                                </div>
                            </div>
                        </main>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default FormA2;

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Request = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <div className="text-center mb-12 mt-12">
                    <div className="text-neutral-700 text-[55px] font-bold font-Boska leading-normal tracking-widest mb-4">Form Planning</div>
                    <div className="text-neutral-400 text-2xl font-normal font-Switzer leading-normal tracking-wide mb-4">Thank you for filling out the form. Here is the information you provided:</div>
                    <div className="border-b border-neutral-400 w-2/3 mx-auto"></div>
                </div>
                <div className="w-full max-w-[1289px] px-4 mb-12">
                    <table className="w-full border-collapse rounded-t-lg overflow-hidden">
                        <tbody>
                            <tr>
                                <td className="text-neutral-700 text-[25px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">First Name</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">John</td> {/* Ganti John dengan hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[25px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Last Name</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Doe</td> {/* Ganti Doe dengan hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[25px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Email</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">john.doe@example.com</td> {/* Ganti john.doe@example.com dengan hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[25px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Phone Number</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">0812-3456-7890</td> {/* Ganti 1234567890 dengan hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[25px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Planning Concept</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Saya ingin konsep acara seperti disney, dengan budget 1.5M dan hari-H sekitar bulan agustus akhir. Dengan tamu kisaran 500 tamu</td> {/* Ganti dengan hasil input dari pengguna */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-[1289px] px-4 text-right mb-12">
                    <div className="text-neutral-700 text-[18px] font-bold font-Switzer underline leading-normal tracking-wide">
                        Anda Ingin Melakukan Perubahan?
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Request;

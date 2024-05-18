import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Request = () => {
    return (
        <>
            <Header />
            <div className="anggaran w-full bg-white p-6 pt-16 pb-16">
                <div className="relative bg-stone-400 p-6 rounded-lg w-full">
                    <div className="RincianAnggaran text-center text-slate-700 text-6xl font-bold font-['Boska'] leading-10 tracking-widest">
                        Rincian Anggaran
                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-100">
                            <thead>
                                <tr className="bg-neutral-400 text-orange-50 text-base font-bold">
                                    <th className="px-4 py-2">No</th>
                                    <th className="px-4 py-2">Uraian</th>
                                    <th className="px-4 py-2">Vol</th>
                                    <th className="px-4 py-2">Harga Awal</th>
                                    <th className="px-4 py-2">Jumlah</th>
                                    <th className="px-4 py-2">Keterangan</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800 text-base">
                                <tr>
                                    <td className="border px-4 py-2">1</td>
                                    <td className="border px-4 py-2">Catering Prasmanan</td>
                                    <td className="border px-4 py-2">100 Porsi</td>
                                    <td className="border px-4 py-2">Rp35.000/porsi</td>
                                    <td className="border px-4 py-2">Rp3.500.000</td>
                                    <td className="border px-4 py-2">Konsumsi tamu</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">Souvenir Tamu</td>
                                    <td className="border px-4 py-2">100 pcs</td>
                                    <td className="border px-4 py-2">Rp10.000/pcs</td>
                                    <td className="border px-4 py-2">Rp1.000.000</td>
                                    <td className="border px-4 py-2">Souvenir berupa keychain</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">Sewa Venue</td>
                                    <td className="border px-4 py-2">1 Auditorium</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Include kursi dan meja</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">Taplak Meja Makan & Akad</td>
                                    <td className="border px-4 py-2">1 Paket</td>
                                    <td className="border px-4 py-2">Rp500.000</td>
                                    <td className="border px-4 py-2">Rp500.000</td>
                                    <td className="border px-4 py-2">Sewa harian</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">5</td>
                                    <td className="border px-4 py-2">Dokumentasi</td>
                                    <td className="border px-4 py-2">1 Paket</td>
                                    <td className="border px-4 py-2">Rp10.000.000</td>
                                    <td className="border px-4 py-2">Rp10.000.000</td>
                                    <td className="border px-4 py-2">Album, softcopy dokumentasi (foto & video)</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">6</td>
                                    <td className="border px-4 py-2">Dekorasi</td>
                                    <td className="border px-4 py-2">1 Set</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Dekorasi photobooth, pelaminan, dsb</td>
                                </tr>
                                <tr>
                                    <td colSpan="4" className="border px-4 py-2 text-right font-bold">Total</td>
                                    <td className="border px-4 py-2">Rp25.000.000</td>
                                    <td className="border px-4 py-2"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="upload-section flex justify-center items-center mt-6">
                        <button className="text-blue-600 text-base font-semibold">Upload Bukti Transfer</button>
                        <div className="icon rotate-45">
                            <div className="w-4 h-4 flex justify-center items-center">
                                <div className="icon-outline-arrow-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-stone-400 p-6 mt-6 rounded-lg w-full">
                    <div className="tooltip flex flex-col items-start p-4 bg-white rounded-lg shadow-lg">
                        <div className="text-section mb-4">
                            <h2 className="text-4xl font-bold text-slate-700">Catatan:</h2>
                            <p className="text-neutral-400 text-base font-medium">
                                Anggaran dapat dilakukan perubahan dengan mengajukan permohonan melalui platform yang tersedia. Sertakan dengan jelas alokasi dana yang diinginkan dan berikan alasan perubahan. Jawaban terkait pertanyaan rincian anggaran yang kurang dipahami akan kami tambahkan pada tabel yang tersedia.
                            </p>
                        </div>
                        <div className="action-section flex items-center gap-2">
                            <button className="text-blue-600 text-base font-semibold">Ajukan Perubahan</button>
                            <div className="icon rotate-45">
                                <div className="w-4 h-4 flex justify-center items-center">
                                    <div className="icon-outline-arrow-right"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Request;

// src/components/VendorTable.jsx
import React from 'react';

const KonsepTable = () => {
    return (
        <div className="overflow-hidden w-full mx-5 border rounded-lg shadow-md">
        <table className="min-w-full rounded-lg text-left">
            <thead className="bg-gray-100 text-gray-500 text-[12px]">
                <tr className='font-switzer'>
                    <th className="py-5 text-center">Edit</th>
                    <th className="py-5 text-center">Tamu</th>
                    <th className="py-5 text-center">Budget</th>
                    <th className="py-5 text-center">Hari-H</th>
                    <th className="py-5 text-center">Tema</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-5 text-center">
                        <button>
                            <img src="../src/assets/icons/edit-icon.svg" alt="edit" />
                        </button>
                    </td>
                    <td className="py-5 text-center">500</td>
                    <td className="py-5 text-center">Rp. 100.000.000</td>
                    <td className="py-5 text-center">10 November 2025</td>
                    <td className="py-5 text-center">Rustik</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default KonsepTable;

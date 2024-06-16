import React from 'react'

const DetailTabel = () => {
    return (
        <div className="overflow-hidden w-full mx-5 border rounded-lg shadow-md">
        <table className="min-w-full rounded-lg text-left">
            <thead className="bg-gray-100 text-gray-500 text-[12px]">
                <tr className='font-switzer'>
                    <th className="py-5 px-1"></th>
                    <th className="py-5">Isi</th>
                    <th className="py-5 text-center">Keterangan</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr className='font-switzer'>
                    <td className="py-5 px-1"></td>
                    <td className="py-5">Dalam perayaan pernikahan, kami telah memilih konsep yang menggabung...</td>
                    <td className="py-5 text-center">
                        <button>
                            <img src="../src/assets/icons/edit-icon.svg" alt="edit" />
                        </button></td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default DetailTabel

import React, { useState } from "react";

const KonsepTable = ({ konsep, onEdit, onDelete }) => {
    const [data, setData] = useState([
        { kategori: "Tamu Undangan", isi: "500", keterangan: "" },
        { kategori: "Perkiraan Budget", isi: "100 Jt", keterangan: "" },
        { kategori: "Perkiraan Hari-h", isi: "10 November", keterangan: "" },
        { kategori: "Tema Acara", isi: "Rustik", keterangan: "" },
        { kategori: "Gambar Acara", isi: "", keterangan: "" },
    ]);
        
    //     const handleInputChange = (index, field, value) => {
    //         const updatedData = [...data];
    //         updatedData[index][field] = value;
    //         setData(updatedData);
    //     };
        
    //     const handleImageUpload = (index, file) => {
    //         const updatedData = [...data];
    //         updatedData[index].keterangan = file;
    //         setData(updatedData);
    //     };
        
    //     const handleDelete = (index) => {
    //         const updatedData = [...data];
    //         updatedData.splice(index, 1);
    //         setData(updatedData);
    //     };

    return (
        <div className="overflow-hidden min-w-full rounded-lg shadow-md">
        <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-100">
                <tr className='font-switzer'>
                    <th className="py-2">Kategori</th>
                    <th className="py-2">Isi</th>
                    <th className="py-2">Keterangan</th>
                </tr>
            </thead>
            <tbody>
                <tr className='font-switzer'>
                    <td className="py-2">{konsep.kategori}</td>
                    <td className="py-2">{konsep.Isi}</td>
                    <td className="py-2 text-center">
                        <button onClick={() => onDelete(vendor)} className='mr-1 w-[20px] h-[20px]'><img src="https://img.icons8.com/ios/50/000000/delete.png" alt="" /></button>
                        <button onClick={() => onEdit(vendor)} className='ml-1 w-[20px] h-[20px]'><img src="https://img.icons8.com/ios/50/000000/edit.png" alt="" /></button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
};

export default KonsepTable;

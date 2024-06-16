// src/components/VendorTable.jsx
import React from 'react';
import VendorRow from './VendorRow';

const VendorTable = ({ vendors, onEdit, onDelete, isAllSelected, onSelectAll }) => {
    return (
        <div className="overflow-hidden m-5 rounded-lg shadow-md">
        <table className="min-w-full bg-white border rounded-lg">
            <thead className="bg-gray-100">
            <tr className='font-switzer '>
                <th className="py-2 text-center">
                <input 
                    type="checkbox" 
                    checked={isAllSelected} 
                    onChange={onSelectAll} 
                />
                </th>
                <th className="py-2 text-left">Vendor</th>
                <th className="py-2">Lokasi</th>
                <th className="py-2">No. Telepon</th>
                <th className="py-2">Harga</th>
                <th className="py-2">Kategori</th>
                <th className="py-2"></th>
            </tr>
            </thead>
            <tbody>
            {vendors.map((vendor) => (
                <VendorRow key={vendor.id} vendor={vendor} onEdit={onEdit} onDelete={onDelete} />
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default VendorTable;
// src/components/VendorRow.jsx
import React from 'react';

const VendorRow = ({ vendor, onEdit, onDelete }) => {
    return (
        <tr>
        <td className="py-2 text-center"><input type="checkbox" /></td>
        <td className="py-2 text-center">
            <div className="flex items-center">
            <img src={vendor.photo} alt="Vendor" className="w-12 h-12 rounded-full mr-4" />
            <div className="text-left">
                <div className="font-semibold">{vendor.name}</div>
                <div className="text-gray-500">{vendor.email}</div>
            </div>
            </div>
        </td>
        <td className="py-2 text-center">{vendor.location}</td>
        <td className="py-2 text-center">{vendor.phone}</td>
        <td className="py-2 text-center">{vendor.price}</td>
        <td className="py-2 text-center">{vendor.category}</td>
        <td className="py-2 text-center">
            <button onClick={() => onDelete(vendor)} className='mr-1 w-[20px] h-[20px]'><img src="https://img.icons8.com/ios/50/000000/delete.png" alt="" /></button>
            <button onClick={() => onEdit(vendor)} className='ml-1 w-[20px] h-[20px]'><img src="https://img.icons8.com/ios/50/000000/edit.png" alt="" /></button>
        </td>
        </tr>
    );
};

export default VendorRow;

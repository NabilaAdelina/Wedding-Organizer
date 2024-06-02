// src/components/AddVendorButton.jsx
import React from 'react';

    const AddVendorButton = ({ onAdd }) => {
    return (
        <button onClick={onAdd} className="bg-neutral5 text-primary2 px-4 py-2 rounded-lg flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
        Tambah Vendor
        </button>
    );
};

export default AddVendorButton;

// src/App.jsx
import React, { useState } from 'react';
import VendorTable from './VendorTable';
import SearchBar from './SearchBar';
import AddVendorButton from './AddVendorButton';
import Filter from './Filter';

const VendorMenu = () => {
    const [vendors, setVendors] = useState([
        { id: 1, name: 'Vendor 1', photo: 'https://via.placeholder.com/50', email: 'vendor1@example.com', location: 'Location 1', phone: '123456789', price: '$100', category: 'Category 1' },
        { id: 2, name: 'Vendor 2', photo: 'https://via.placeholder.com/50', email: 'vendor2@example.com', location: 'Location 2', phone: '987654321', price: '$200', category: 'Category 2' },
        { id: 3, name: 'Vendor 3', photo: 'https://via.placeholder.com/50', email: 'vendor3@example.com', location: 'Location 3', phone: '111222333', price: '$300', category: 'Category 3' },
        { id: 4, name: 'Vendor 4', photo: 'https://via.placeholder.com/50', email: 'vendor4@example.com', location: 'Location 4', phone: '444555666', price: '$400', category: 'Category 4' },
        { id: 5, name: 'Vendor 5', photo: 'https://via.placeholder.com/50', email: 'vendor5@example.com', location: 'Location 5', phone: '777888999', price: '$500', category: 'Category 5' },
        { id: 6, name: 'Vendor 6', photo: 'https://via.placeholder.com/50', email: 'vendor6@example.com', location: 'Location 6', phone: '123123123', price: '$600', category: 'Category 6' },
    ]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    
    const handleAddVendor = () => {
        // Logic untuk menambah vendor baru
    };
    
    const handleEditVendor = (vendor) => {
        // Logic untuk mengedit vendor
    };
    
    const handleDeleteVendor = (vendor) => {
        setVendors(vendors.filter(v => v.id !== vendor.id));
    };
    
    const handleSelectAll = () => {
        setIsAllSelected(!isAllSelected);
        // Logic untuk memilih semua baris atau tidak
    };
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };
    
    const handleNextPage = () => {
        if (currentPage < Math.ceil(filteredVendors.length / rowsPerPage)) {
        setCurrentPage(currentPage + 1);
        }
    };
    
    const filteredVendors = vendors.filter(vendor => {
        return (
        (vendor.name.toLowerCase().includes(search.toLowerCase()) || 
        vendor.location.toLowerCase().includes(search.toLowerCase())) && 
        (filter === '' || vendor.category === filter)
        );
    });
    
    const paginatedVendors = filteredVendors.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
    
    return (
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
        <h1 className="text-2xl font-bold mb-4">Vendor Acara</h1>
        <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
            <AddVendorButton onAdd={handleAddVendor} />
            <Filter onFilter={setFilter} />
            </div>
            <div className="flex space-x-2">
            <SearchBar onSearch={setSearch} />
            </div>
        </div>
        <VendorTable 
        vendors={paginatedVendors} 
        onEdit={handleEditVendor} 
        onDelete={handleDeleteVendor} 
        isAllSelected={isAllSelected} 
        onSelectAll={handleSelectAll} 
        currentPage={currentPage}
        totalPages={Math.ceil(filteredVendors.length / rowsPerPage)}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        />
        <div className="flex justify-between mt-4">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="border text-gray-700 px-4 py-2 rounded-lg shadow-md">
            Prev
            </button>
            <span>Page {currentPage} of {Math.ceil(filteredVendors.length / rowsPerPage)}</span>
            <button onClick={handleNextPage} disabled={currentPage === Math.ceil(filteredVendors.length / rowsPerPage)} className=" border text-gray-700 px-4 py-2 rounded-lg shadow-md">
            Next
            </button>
        </div>
        </div>
    );
};

export default VendorMenu;

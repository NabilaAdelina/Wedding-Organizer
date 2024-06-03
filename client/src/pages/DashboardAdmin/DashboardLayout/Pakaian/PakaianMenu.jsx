import React, { useState } from 'react';
import SearchBar from './SearchBar';
import AddPakaianButton from './AddPakaianButton';

const PakaianMenu = () => {
    const [search, setSearch] = useState('');
    const handleAddPakaian = () => {
        // Logic untuk menambah vendor baru
    };
    return (
        <>
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
        <h1 className="text-2xl font-bold mb-4">Pakaian</h1>
        <div className="flex justify-between mb-4">
            <div className="flex space-x-2">
            <AddPakaianButton onAdd={handleAddPakaian} />
            {/* <Filter onFilter={setFilter} /> */}
            </div>
            <div className="flex space-x-2">
            <SearchBar onSearch={setSearch} />
            </div>
        </div>
        </div>
        </>
    );
};

export default PakaianMenu

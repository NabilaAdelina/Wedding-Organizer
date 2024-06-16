import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
        type="text"
        placeholder="Search..."
        className="border px-5 h-6 bg-gray-100 rounded"
        onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
    return (
        <input
        type="text"
        placeholder="Search..."
        className="border px-5 py-0 rounded-lg"
        onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;

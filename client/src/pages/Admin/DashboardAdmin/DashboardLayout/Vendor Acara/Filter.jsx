// src/components/Filter.jsx
import React from 'react';

const Filter = ({ onFilter }) => {
    const handleFilterChange = (event) => {
        onFilter(event.target.value);
    };

    return (
        <div>
        <button className=" text-black h-10 px-4 py-2 rounded-lg flex items-center">
            
            <select onChange={handleFilterChange} className=" border  rounded text-black px-2 py-1 outline-none">
            <option value="">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 11.414V16a1 1 0 01-.553.894l-4 2A1 1 0 018 18.618V11.414L3.293 6.707A1 1 0 013 6V4z"></path>
            </svg>Filter</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
            <option value="Category 5">Category 5</option>
            <option value="Category 6">Category 6</option>
            </select>
        </button>
        </div>
    );
};

export default Filter;
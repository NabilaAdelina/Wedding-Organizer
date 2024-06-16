import React, { useState } from 'react';
import AddDecorButton from './AddDecorButton';
import DecorCard from './DecorCard';

const DecorMenu = () => {
    const [search, setSearch] = useState('');
    const handleAddDecor = () => {
        // Logic untuk menambah vendor baru
    };
    return (
        <>
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <h1 className="text-[36px] font-switzer m-5">Interior & Decoration</h1>
            <div className="flex flex-col mb-4 ml-[170px]">
                <div className="flex space-x-2">
                <AddDecorButton onAdd={handleAddDecor} />
                {/* <Filter onFilter={setFilter} /> */}
                </div>
                <div className='grid grid-cols-2 gap-5'>
                <DecorCard
                    url="../src/assets/images/altar-1.png"
                    name="Altar 1"
                    konsep="Elegant"
                    vendor="xxxxx"
                    phone="088xxxxx"
                />
                <DecorCard
                    url="../src/assets/images/altar-2.png"
                    name="Altar 2"
                    konsep="Aesthetic"
                    vendor="xxxxx"
                    phone="088xxxxx"
                />
                <DecorCard
                    url="../src/assets/images/meja-tamu.png"
                    name="Meja Tamu"
                    konsep="Elegant"
                    vendor="xxxxx"
                    phone="088xxxxx"
                />
                <DecorCard
                    url="../src/assets/images/meja-konsumsi.png"
                    name="Meja Konsumsi"
                    konsep="Rustik"
                    vendor="xxxxx"
                    phone="088xxxxx"
                />
                </div>
            </div>
        </div>
        </>
    );
};

export default DecorMenu
import React from 'react'
import KonsepTable from './KonsepTable';

const KonsepMenu = () => {
    return (
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
        <h1 className="text-2xl font-bold mb-4">Konsep Acara</h1>
        <div className="flex justify-between mb-4">
            <KonsepTable />
        </div>
        </div>
    );
};

export default KonsepMenu

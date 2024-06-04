import React, { useState } from 'react';
import SearchBar from './SearchBar';
import AddPakaianButton from './AddPakaianButton';
import PakaianCard from './PakaianCard';

const PakaianMenu = () => {
    const [search, setSearch] = useState('');
    const handleAddPakaian = () => {
        // Logic untuk menambah vendor baru
    };
    return (
        <>
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <h1 className="text-[36px] m-5">Pakaian Wanita</h1>
            <div className="flex flex-col mb-4 ml-[170px]">
                <div className="flex space-x-2">
                <AddPakaianButton onAdd={handleAddPakaian} />
                {/* <Filter onFilter={setFilter} /> */}
                </div>
                <div className='grid grid-cols-3 gap-5'>
                <PakaianCard
                    url="../src/assets/images/wed-dress1.png"
                    name="Gaun V-neck"
                    harga="Rp. 2.500.000"
                    deskripsi="Tekstur mewah dan kilauan alami, menjadi pilihan populer untuk gaun pengantin..."
                    jenis="Gaun body-hugging"
                    warna="putih"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-dress3.png"
                    name="Gaun Kepala Tertutup"
                    harga="Rp. 3.000.000"
                    deskripsi="Gaun dengan pesona berbeda dan gaya yang unik. Menjadi gaya yang berbeda dan sangat..."
                    jenis="Gaun"
                    warna="Putih"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-dress2.png"
                    name="Gaun Slim-fit"
                    harga="Rp. 3.500.000"
                    deskripsi="Gaun dengan pesona yang lebih elegan serta sangat memukau..."
                    jenis="Gaun body-hugging"
                    warna="Putih"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-dress1.png"
                    name="Gaun V-neck"
                    harga="Rp. 2.500.000"
                    deskripsi="Tekstur mewah dan kilauan alami, menjadi pilihan populer untuk gaun pengantin..."
                    jenis="Gaun body-hugging"
                    warna="putih"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-dress3.png"
                    name="Gaun Kepala Tertutup"
                    harga="Rp. 3.000.000"
                    deskripsi="Gaun dengan pesona berbeda dan gaya yang unik. Menjadi gaya yang berbeda dan sangat..."
                    jenis="Gaun"
                    warna="Putih"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-dress2.png"
                    name="Gaun Slim-fit"
                    harga="Rp. 3.500.000"
                    deskripsi="Gaun dengan pesona yang lebih elegan serta sangat memukau..."
                    jenis="Gaun body-hugging"
                    warna="Putih"
                    size="L"
                />
                </div>
                {/* <div className='flex m-10 justify-center bg-black'>
                    <button className='bg-transparent hover:bg-gray-100 text-primary1 font-semibold py-2 px-10 border border-primary1'>
                        Show More
                    </button>
                </div> */}
            </div>
            
            <h1 className="text-[36px] m-5">Pakaian Pria</h1>
            <div className="flex flex-col justify-between mb-4 ml-[170px]">
                <div className="flex space-x-2">
                <AddPakaianButton onAdd={handleAddPakaian} />
                {/* <Filter onFilter={setFilter} /> */}
                </div>
                <div className='grid grid-cols-3 gap-5'>
                <PakaianCard
                    url="../src/assets/images/wed-jas3.png"
                    name="Jas Biru"
                    harga="Rp. 3.000.000"
                    deskripsi="Pesona jas unik dengan kain biru dan dasi bisu. Memiliki kesan yang elegan dan..."
                    jenis="Jas Pria"
                    warna="Biru"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-jas2.png"
                    name="Jas Katun Hitam"
                    harga="Rp. 4.500.000"
                    deskripsi="Jas pria berkain katun sehingga lembut dan sangat nyaman dipakai..."
                    jenis="Jas Pria"
                    warna="Hitam"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-jas1.png"
                    name="Jas Hitam"
                    harga="Rp. 4.000.000"
                    deskripsi="Jas dengan pesona yang sangat gagah membuat calon pengantin dengan tampilan..."
                    jenis="Jas"
                    warna="Hitam"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-jas3.png"
                    name="Jas Biru"
                    harga="Rp. 3.000.000"
                    deskripsi="Pesona jas unik dengan kain biru dan dasi bisu. Memiliki kesan yang elegan dan..."
                    jenis="Jas Pria"
                    warna="Biru"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-jas2.png"
                    name="Jas Katun Hitam"
                    harga="Rp. 4.500.000"
                    deskripsi="Jas pria berkain katun sehingga lembut dan sangat nyaman dipakai..."
                    jenis="Jas Pria"
                    warna="Hitam"
                    size="L"
                />
                <PakaianCard
                    url="../src/assets/images/wed-jas1.png"
                    name="Jas Hitam"
                    harga="Rp. 4.000.000"
                    deskripsi="Jas dengan pesona yang sangat gagah membuat calon pengantin dengan tampilan..."
                    jenis="Jas"
                    warna="Hitam"
                    size="L"
                />
                </div>
            </div>
        </div>
        </>
    );
};

export default PakaianMenu
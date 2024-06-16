import React from 'react';

const SALayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-10">
        <div className="mb-4">
          <h1 className='text-left text-[50px] font-boska font-bold text-neutral4 mb-4'>
            Schedule Planning
          </h1>
          <div className="flex justify-start">
            <button className="w-48 px-8 py-4 bg-neutral-700 rounded-3xl text-white text-lg font-semibold">
              Add Schedule
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="overflow-x-auto px-8 py-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-4 text-gray-600 text-xs font-normal">Kegiatan</th>
                  <th className="p-4 text-gray-600 text-xs font-normal">Customer</th>
                  <th className="p-4 text-gray-600 text-xs font-normal">Tanggal</th>
                  <th className="p-4 text-gray-600 text-xs font-normal">Jam</th>
                  <th className="p-4 text-gray-600 text-xs font-normal">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 text-stone-500 text-sm font-medium">Foto Prewed</td>
                  <td className="p-4 text-stone-500 text-sm font-medium">John Dae</td>
                  <td className="p-4 text-stone-500 text-sm font-medium">13/06/2022</td>
                  <td className="p-4 text-stone-500 text-sm font-medium">08:00 WIB</td>
                  <td className="p-4 text-stone-500 text-sm font-medium flex gap-2">
                    <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                      <div className="Edit2 w-5 h-5"></div>
                    </button>
                    <button className="p-2 rounded-lg bg-red-200 hover:bg-red-300">
                      <div className="Trash22 w-5 h-5"></div>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SALayout;

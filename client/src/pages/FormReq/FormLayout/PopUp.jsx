import React, { useState } from 'react';

const PopUp = () => {
  const [konsepPernikahan, setKonsepPernikahan] = useState('');

  const handleInputChange = (e) => {
    setKonsepPernikahan(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Konsep pernikahan:', konsepPernikahan);

    setKonsepPernikahan('');
  };

  return (
    <div className="PopUpAjukanPerubahan w-96 h-80 relative bg-white rounded-lg border border-zinc-300">
      <div className="ButtonSave px-2.5 py-2 left-[676px] top-[263px] absolute bg-stone-400 rounded-md justify-center items-center gap-2.5 inline-flex">
        <div className="Hover text-neutral-700 text-xs font-semibold font-['Switzer'] tracking-wide">Simpan</div>
      </div>
      <div className="ButtonCancel pl-4 pr-3.5 py-2 left-[596px] top-[263px] absolute bg-zinc-300 rounded-md justify-center items-center gap-2.5 inline-flex">
        <div className="Hover text-neutral-700 text-xs font-semibold font-['Switzer'] tracking-wide">Batal</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="PlanningConcept w-96 h-56 left-[29px] top-[23px] absolute">
          <div className="Group847 w-96 h-44 left-[1.13px] top-[50px] absolute bg-white rounded-2xl border border-black">
            <textarea
              value={konsepPernikahan}
              onChange={handleInputChange}
              className="TulisKonsep w-full h-full bg-transparent border-none text-neutral-400 text-base font-medium font-['Switzer'] leading-normal tracking-wide resize-none p-4"
              placeholder="Tulis konsep awal pernikahan yang anda inginkan, sertakan juga tanggal hari H dan kasaran budget anda!"
            ></textarea>
          </div>
          <div className="ApaYangInginAndaUbah w-52 left-0 top-0 absolute text-neutral-700 text-base font-medium font-['Switzer'] leading-normal tracking-wide">Apa yang ingin anda ubah?</div>
        </div>
        <button type="submit" className="ButtonSave px-2.5 py-2 left-[676px] top-[263px] absolute bg-stone-400 rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="Hover text-neutral-700 text-xs font-semibold font-['Switzer'] tracking-wide">Simpan</div>
        </button>
      </form>
    </div>
  );
};

export default PopUp;

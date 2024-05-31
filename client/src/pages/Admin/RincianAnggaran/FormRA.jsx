import React from 'react'

const FormRA = () => {
    return (
        <>
            <div className="FormRincian w-96 h-96 relative bg-white">
                <div className="Username h-20 left-[73px] top-[53px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="InputTextLabel self-stretch text-neutral-700 text-base font-semibold font-['Switzer'] leading-none">Uraian</div>
                    <div className="InputField self-stretch h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                        <div className="Text self-stretch justify-between items-start inline-flex">
                            <div className="TypeHere w-72 text-stone-500 text-base font-normal font-['Switzer'] leading-normal">Vendor1</div>
                            <div className="Icon w-6 h-6 relative opacity-0" />
                        </div>
                    </div>
                </div>
                <div className="Password h-28 left-[73px] top-[167px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="InputTextLabel self-stretch text-neutral-700 text-base font-semibold font-['Switzer'] leading-none">Vol</div>
                    <div className="InputField self-stretch h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                        <div className="Text self-stretch shadow justify-between items-start inline-flex">
                            <div className="TypeHere w-72 text-gray-800 text-xs font-normal font-['Inter'] leading-none">.....................................................</div>
                            <div className="Icon w-6 h-6 relative opacity-0" />
                        </div>
                    </div>
                    <div className="AssistiveText self-stretch"></div>
                </div>
                <div className="Password h-20 left-[73px] top-[293px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="InputTextLabel self-stretch text-neutral-700 text-base font-semibold font-['Noto Sans'] leading-none">Harga Awal</div>
                    <div className="InputField self-stretch h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                        <div className="Text self-stretch justify-between items-start inline-flex">
                            <div className="TypeHere w-72 text-stone-500 text-base font-normal font-['Noto Sans'] leading-normal">Rp.</div>
                            <div className="Icon w-6 h-6 relative opacity-0" />
                        </div>
                    </div>
                </div>
                <div className="Password h-20 left-[73px] top-[407px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="InputTextLabel self-stretch text-neutral-700 text-base font-semibold font-['Noto Sans'] leading-none">Jumlah</div>
                    <div className="InputField self-stretch h-14 p-4 bg-white rounded-lg border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                        <div className="Text self-stretch justify-between items-start inline-flex">
                            <div className="TypeHere w-72 text-stone-500 text-base font-normal font-['Noto Sans'] leading-normal">Rp.-</div>
                            <div className="Icon w-6 h-6 relative opacity-0" />
                        </div>
                    </div>
                </div>
                <div className="Password h-20 left-[73px] top-[521px] absolute flex-col justify-start items-start gap-2 inline-flex">
                    <div className="InputTextLabel self-stretch text-neutral-700 text-base font-semibold font-['Noto Sans'] leading-none">Keterangan</div>
                    <div className="InputField self-stretch h-14 p-4 bg-white rounded-lg shadow border border-stone-300 flex-col justify-start items-start gap-2.5 flex">
                        <div className="Text self-stretch justify-between items-start inline-flex">
                            <div className="TypeHere w-72 text-stone-500 text-base font-normal font-['Noto Sans'] leading-normal">L</div>
                            <div className="Icon w-6 h-6 relative opacity-0" />
                        </div>
                    </div>
                </div>
                <div className="ButtonLandingPage px-6 py-2.5 left-[573px] top-[656px] absolute bg-neutral-700 rounded-md shadow justify-center items-center gap-2.5 inline-flex">
                    <div className="Hover text-red-200 text-base font-semibold font-['Switzer'] tracking-widest">Submit</div>
                </div>
            </div>
        </>
    )
}

export default FormRA

import bgservice from "../../../assets/images/bg-service.png"

const DetailAcara = () => {
    return (
        <>
        <section className='h-[547px] flex justify-center items-center' style={{
            backgroundImage: `url(${bgservice})`, backgroundSize: 'cover'
        }}>
            <div className='w-[1000px] bg-neutral1 shadow-inner py-3 rounded-lg flex m-auto'>
                <div className="px-10 py-8">
                    <h1 className='text-[42px] font-boska text-neutral4 font-bold'>Detail Acara:</h1>
                    <div>
                        <p className='font-switzer text-neutral3 text-[16px]'>
                        Dalam perayaan pernikahan, kami telah memilih konsep yang menggabungkan sentuhan elegan dan romantis dengan nuansa alam yang  hangat. 
Acara akan dilangsungkan di sebuah kebun yang luas, didekorasi dengan rangkaian bunga segar, lampu-lampu hias, dan elemen-elemen kayu yang memberikan sentuhan rustic. 
Tema warna kami adalah putih bersih, krem, dan nuansa emas yang hangat, menciptakan atmosfer yang anggun dan berkelas. 
Kami akan memulai hari pernikahan kami dengan upacara di bawah tenda dengan latar belakang pemandangan alam yang indah, dihiasi dengan rangkaian bunga segar dan hiasan dedaunan.
                        <br />
                        Setelah itu, tamu akan diundang untuk menikmati pesta resepol di lapangan terbuka, di mana kami akan menyajikan hidangan lezat dari catering terbaik dan menampilkan hiburan live dari band favorit kami. 
Detall-detail kecil seperti tempat duduk yang nyaman, meja makan yang indah, dan pencahayaan yang hangat akan menambahkan sentuhan khusus pada perayaan kami, Dengan konsep ini, kami berharap untuk menciptakan pengalaman pernikahan yang tak terlupakan bagi kami dan semua tamu yang hadir.
                        </p>
                    </div>
                    <div>
                        <br />
                        <a href="#" className="flex float-right text-[16px] font-switzer font-bold text-blue-500">Ajukan perubahan 
                            <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9L9 1m0 0H1m8 0V9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DetailAcara

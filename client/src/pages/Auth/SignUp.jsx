import { Link, useNavigate } from "react-router-dom";
import background from '../../assets/images/bg-auth.png';
import logo from '../../assets/logo/logo-auth.svg';
import axios from "axios";
import { useState } from "react";
import Swal from 'sweetalert2';
import { useEffect } from "react";

const SignUp = () => {
    const [formData, setFormData] = useState({});
    const [isAdmin, setIsAdmin] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSubmit = { ...formData, role: isAdmin ? 'admin' : 'user' };

        axios.post('http://localhost:3000/auth/register', dataToSubmit)
            .then((res) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Kamu berhasil daftar",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/login');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        console.log(isAdmin)
    }, [isAdmin]);


    return (
        <div className='flex h-screen'>
            <div className='w-1/2 flex flex-col justify-center items-center' style={{
                backgroundImage: `url(${background})`
            }}>
                <img className="xl:w-[300px] 2xl:w-[450px]" src={logo} alt="" />
                <p className="text-[60px] xl:text-[40px] text-white font-boska font-bold w-[465px] text-center">Selamat Datang di Komunitas Kami</p>
            </div>
            <div className='flex flex-col justify-center p-20  w-1/2'>
                <div className='mb-[30px]'>
                    <h1 className='text-[50px] font-boska font-bold mb-[15px]'>Daftar</h1>
                    <p>EverAfter memberikan Anda pengalaman terbaik dalam pernikahan impian Anda!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col 2xl:gap-4 xl:gap-2 mb-10'>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="name">Nama Lengkap</label>
                            <input placeholder="Masukkan nama lengkap Anda" id="name" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    name: e.target.value
                                });
                            }} type="text" className='rounded-[8px] xl:h-[50px] lg:h-[30px]' required />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="email">Alamat Email</label>
                            <input placeholder="Masukkan email Anda" id="email" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                });
                            }} type="email" className='rounded-[8px] xl:h-[50px] lg:h-[30px]' required />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="password">Kata Sandi</label>
                            <input placeholder="Masukkan kata sandi Anda" id="password" onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    password: e.target.value
                                });
                            }} type="password" className='rounded-[8px] xl:h-[50px] lg:h-[30px]' required />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox"
                                    className='rounded-sm cursor-pointer'
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                />
                                <p>ingatkan saya</p>
                            </div>
                            <p className="text-blue-600">Lupa Kata Sandi?</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <button type="submit" className='p-4 px-12 rounded-lg bg-neutral4 text-white'>
                            Daftar
                        </button>
                    </div>
                    <p className="text-gray-600">Sudah punya akun? <Link className="text-blue-600 font-bold" to='/login'>Masuk</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;

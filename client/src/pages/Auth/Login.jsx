import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import background from '../../assets/images/bg-auth.png';
import logo from '../../assets/logo/logo-auth.svg';
import { AuthContext } from '../../hooks/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const { setIsLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                email,
                password,
                role: isAdmin ? 'admin' : 'user'
            });

            localStorage.setItem('token', response.data.token);
            setIsLogin(true);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login successful',
                showConfirmButton: false,
                timer: 1500
            });

            if (isAdmin) {
                navigate('/fa1'); // Navigate to admin dashboard
            } else {
                navigate('/'); // Navigate to user dashboard or homepage
            }
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response ? error.response.data.message : 'Login failed!',
            });
        }
    };

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
                    <h1 className='text-[50px] font-boska font-bold mb-[15px]'>Masuk</h1>
                    <p>EverAfter memberikan Anda pengalaman terbaik dalam pernikahan impian Anda! </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col 2xl:gap-4 xl:gap-2 mb-10'>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="email">Alamat Email</label>
                            <input type="email" className='rounded-[8px] xl:h-[50px] lg:h-[30px]' required
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label htmlFor="password">Kata Sandi</label>
                            <input type="password" className='rounded-[8px] xl:h-[50px] lg:h-[30px]' required
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" className='rounded-sm cursor-pointer'
                                checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
                            <p>Login sebagai admin?</p>
                        </div>
                    </div>
                    <div className="mb-10">
                        <button type="submit" className='p-4 px-12 rounded-lg bg-neutral4 text-white'>
                            Masuk
                        </button>
                    </div>
                    <p className="text-gray-600">Belum punya akun? <Link className="text-blue-600 font-bold" to='/signup'>Daftar</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;

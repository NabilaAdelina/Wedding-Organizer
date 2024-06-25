import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Request = () => {
    const [nama_depan, setNamaDepan] = useState('');
    const [nama_belakang, setNamaBelakang] = useState('');
    const [email, setEmail] = useState('');
    const [nohp, setNohp] = useState('');
    const [konsep, setKonsep] = useState('');
    const [is_update, setIsUpdate] = useState('false');
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const DataUser = JSON.parse(localStorage.getItem("users"));
    const userId = DataUser ? DataUser.userid : null;

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (!DataUser || DataUser.role !== "user") {
            navigate("/");
            return;
        }

        const fetchUserForms = async () => {
            try {
                const response = await axios.get(`/api/user/form/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log(response.data.length)

                if (response.data.length > 1) {

                    Swal.fire({
                        title: "Oops!",
                        text: "sudah pernah isi Form Request sebelumnya, silahkan cek di menu Form Request",
                        icon: "error",
                        showConfirmButton: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate("/");
                        }
                    });

                    return;
                }
            } catch (error) {
                console.error('Error fetching user forms:', error);
                // Handle error fetching data
            }
        };

        fetchUserForms();
    }, [token, navigate, DataUser, userId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const urlApiENV = import.meta.env.VITE_API_URL;

        try {
            const response = await axios.post(`${urlApiENV}/api/form`, {
                nama_depan,
                nama_belakang,
                email,
                nohp,
                konsep,
                is_update
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const responmsg = response.data.msg;
            const responsedata = response.data.data;
            if (responmsg) {
                Swal.fire({
                    title: "Submit Success!",
                    text: "Your form has been successfully submitted",
                    icon: "success"
                }).then(() => {
                    navigate(`/aform/${responsedata.id}`);
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Submit Failed!",
                text: `${error.response ? error.response.data.msg : error.message}`,
                icon: "error"
            });
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <div className="text-center mb-12 mt-12">
                    <div className="text-neutral-700 text-[55px] font-bold font-['Boska'] leading-normal tracking-widest mb-4">Form Planning</div>
                    <div className="text-neutral-400 text-2xl font-normal font-['Switzer'] leading-normal tracking-wide mb-4">We’d love to hear from you. Please fill out this form.</div>
                    <div className="border-b border-neutral-400 w-2/3 mx-auto"></div>
                </div>
                <form className="w-full max-w-[1289px] flex flex-col items-center px-4 mb-12" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="firstName" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">First Name</label>
                        <input
                            id="firstName"
                            className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3"
                            type="text"
                            placeholder="First Name"
                            value={nama_depan}
                            onChange={(e) => setNamaDepan(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="lastName" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Last Name</label>
                        <input
                            id="lastName"
                            className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3"
                            type="text"
                            placeholder="Last Name"
                            value={nama_belakang}
                            onChange={(e) => setNamaBelakang(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="email" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Email</label>
                        <input
                            id="email"
                            className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="phoneNumber" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Phone Number</label>
                        <input
                            id="phoneNumber"
                            className="w-full h-[93px] bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3"
                            type="text"
                            placeholder="Phone Number"
                            value={nohp}
                            onChange={(e) => setNohp(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex flex-col mb-6">
                        <label htmlFor="planningConcept" className="text-neutral-700 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide mb-2">Planning Concept</label>
                        <textarea
                            id="planningConcept"
                            className="w-full bg-white rounded-[14px] border border-black text-neutral-400 text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide px-6 py-3"
                            placeholder="Tulis konsep awal pernikahan yang anda inginkan, sertakan juga tanggal hari H dan kasaran budget anda!"
                            style={{ height: '300px' }}
                            value={konsep}
                            onChange={(e) => setKonsep(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full h-[93px] bg-zinc-500 text-white text-[25px] font-medium font-['Switzer'] leading-normal tracking-wide rounded-[14px] px-6 py-3 mt-6 text-center flex items-center justify-center">
                        Submit
                    </button>
                </form>
                <div className="w-full max-w-[1289px] px-4 text-left mb-12">
                    <div className="text-neutral-700 text-xl font-bold font-['Switzer'] underline leading-normal tracking-wide">
                        Note: Pastikan semua data telah diisi dengan benar!
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Request;

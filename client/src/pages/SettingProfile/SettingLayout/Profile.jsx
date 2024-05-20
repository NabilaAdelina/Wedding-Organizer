import React from 'react'
import SidebarProfile from './SidebarProfile'
import NavbarProfile from './NavbarProfile'
import profile from '../../../assets/images/profile-medium.png'

const Profile = () => {
    return (
        <>
            <NavbarProfile />
            <SidebarProfile />
            <div className='w-full pt-[150px] pl-[270px] flex flex-col gap-[53px] mb-24'>
                <h1 className='font-medium 2xl:text-[32px] text-[22px] text-neutral4'>Edit Profile</h1>
                <div className='flex flex-col gap-5'>
                    <div className='2xl:w-[100px] w-[80px]'>
                        <img src={profile} alt="" />
                    </div>
                    <div>
                        <p className='font-bold text-neutral4'>Foto Anda</p>
                        <p className='text-neutral4 text-[14px]'>Ini akan ditampilkan di profil Anda</p>
                    </div>
                    <div>
                        <input type="file" className='rounded-md text-[14px] file:bg-transparent' />
                    </div>
                </div>
                <div className='flex flex-col gap-[50px]'>
                    <p className='text-neutral4 text-2xl font-medium'>Informasi Pribadi</p>
                    <form action="">
                        <div className='flex gap-[52px]'>
                            <div className='flex flex-col gap-[32px]'>
                                <div className='flex flex-col w-[260px] gap-[10px]'>
                                    <label htmlFor="">Nama Lengkap</label>
                                    <input type="text" className='rounded-[8px]' />
                                </div>
                                <div className='flex flex-col w-[260px] gap-[10px]'>
                                    <label htmlFor="">Nama Lengkap</label>
                                    <input type="text" className='rounded-[8px]' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-[32px]'>
                                <div className='flex flex-col w-[260px] gap-[10px]'>
                                    <label htmlFor="">Nama Lengkap</label>
                                    <input type="text" className='rounded-[8px]' />
                                </div>
                                <div className='flex flex-col w-[260px] gap-[10px]'>
                                    <label htmlFor="">Nama Lengkap</label>
                                    <input type="text" className='rounded-[8px]' />
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Simpan Perubahan" className='px-5 py-3 bg-neutral4 text-white rounded-[8px] mt-[50px] cursor-pointer' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile

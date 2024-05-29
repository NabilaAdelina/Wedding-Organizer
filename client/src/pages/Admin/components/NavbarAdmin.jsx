import React from 'react'
import logo3 from '../../../assets/logo/logo3.svg'
import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <header className='bg-neutral4 flex justify-between px-[64px] py-[20px] fixed left-0 top-0 right-0 z-20'>
            <img src={logo3} alt="" />
            <div className='flex gap-5 items-center'>
                <div className='flex gap-5'>
                    <Link to={"/user/profile"} className='text-primary3'>My profile</Link>
                </div>
            </div>
        </header>
    )
}

export default NavbarAdmin

import React from 'react'
import logo3 from '../assets/logo/logo3.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    const linkNav = [{
        id: 1,
        name: "Concept",
        path: "/concept"
    }, {
        id: 2,
        name: "Schedule",
        path: "/schedule"
    }, {
        id: 3,
        name: "Cost Plan",
        path: "/costplan"
    }
    ]
    return (
        <header className='bg-neutral4 flex justify-between px-[64px] py-[20px]'>
            <img src={logo3} alt="" />
            <div className='flex gap-5 items-center'>
                <ul className='flex gap-10'>
                    {linkNav.map((link) => {
                        return (
                            <Link to={link.path} key={link.id} className=' text-primary3'>{link.name}</Link>
                        )
                    })}
                </ul>
                <div className='flex gap-5'>
                    <Link to={"/user/profile"} className='text-primary3'>My profile</Link>
                </div>
            </div>
        </header>
    )
}

export default Header

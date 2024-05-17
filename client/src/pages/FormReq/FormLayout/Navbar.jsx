import React from 'react'
import logo2 from "../../../assets/logo/logo2.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

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
        <div className='flex justify-between position: absolute top-0 left-0 right-0 px-[64px] py-6'>
            <img src={logo2} alt="" />
            <div className='flex gap-5 items-center'>
                <ul className='flex gap-10'>
                    {linkNav.map((link) => {
                        return (
                            <Link to={link.path} key={link.id} className='text-white'>{link.name}</Link>
                        )
                    })}
                </ul>
                <div className='flex gap-5'>
                    <button>Sign</button>
                    <button>Login</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar

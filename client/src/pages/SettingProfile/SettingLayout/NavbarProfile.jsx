import navback from '../../../assets/logo/navback.svg'
import notification from '../../../assets/logo/notification.svg'
import search from '../../../assets/logo/search.svg'
import profile from '../../../assets/images/profile-small.png'
import { Link } from 'react-router-dom'

const NavbarProfile = () => {
    return (
        <div className='z-20 px-[50px] py-[20px] flex justify-between items-center border-b border-neutral2 fixed left-0 top-0 right-0 bg-neutral1'>
            <Link to={"/"} className='flex gap-3'>
                <img src={navback} alt="" />
                <p className='text-neutral3'>Kembali</p>
            </Link>
            <div className='relative'>
                <img className='absolute left-2 bottom-[5px]' src={search} alt="" />
                <input className='pl-10 p-2 w-[340px] rounded-xl border-neutral2' placeholder='Pencarian' type="text" />
            </div>
            <div className='flex gap-3'>
                <img src={notification} alt="" />
                <img src={profile} alt="" />
            </div>
        </div>
    )
}

export default NavbarProfile

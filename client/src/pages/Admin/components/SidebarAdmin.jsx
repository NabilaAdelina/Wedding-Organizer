import profileIcon from '../../../assets/logo/profile-icon.svg'
import setting from '../../../assets/logo/setting-icon.svg'
import logout from '../../../assets/icons/logout-icon.svg'
import profile from '../../../assets/images/profile-admin.png'
import { NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
    return (
        <div className='px-8 pb-10 pt-14 border-r border-neutral2 bg-white flex flex-col justify-between w-[280px]'>
            <div className='pt-20'>
                <div className='flex flex-col gap-[20px] '>
                    <div className='flex gap-3 items-center'>
                        <img src={profile} alt="Profile" />
                        <p className='font-medium text-neutral4 text-[20px]'>Gustavo</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <NavLink
                            to="/dashboard/concept"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={profileIcon} alt="Profile" />
                            <p>Concept</p>
                        </NavLink>
                        <NavLink
                            to="/dashboard/costplan"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={setting} alt="Setting" />
                            <p>Costplan</p>
                        </NavLink>
                        <NavLink
                            to="/dashboard/schedule"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={setting} alt="Setting" />
                            <p>Schedule</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-3 px-[10px]'>
                    <img className='w-4' src={setting} alt="Setting" />
                    <p className='text-neutral3'>Settings</p>
                </div>
                <div className='flex gap-3 px-[10px]'>
                    <img className='w-4' src={logout} alt="Logout" />
                    <p className='text-[#D55F5A] text-[14px]'>Keluar Akun</p>
                </div>
            </div>
        </div>
    );
}

export default SidebarAdmin;

import setting from '../../../assets/logo/setting-icon.svg'
import logout from '../../../assets/icons/logout-icon.svg'
import profile from '../../../assets/images/profile-admin.png'
import schedule from '../../../assets/icons/schedule-icon.svg'
import costplan from '../../../assets/icons/costplan-icon.svg'
import concept from '../../../assets/icons/concept-icon.svg'
import request from '../../../assets/icons/form-icon.svg'
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
                            to="/dashboard/request"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={request} alt="Request" />
                            <p>Request</p>
                        </NavLink>
                        <NavLink
                            to="/dashboard/concept"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={concept} alt="Profile" />
                            <p>Concept</p>
                        </NavLink>
                        <NavLink
                            to="/dashboard/costplan"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={costplan} alt="CostPlan" />
                            <p>Costplan</p>
                        </NavLink>
                        <NavLink
                            to="/dashboard/schedule"
                            className={({ isActive }) => isActive ? 'p-[10px] flex gap-3 text-gray-700' : 'p-[10px] flex gap-3 text-neutral3'}
                        >
                            <img className='w-5' src={schedule} alt="Schedule" />
                            <p>Schedule</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <NavLink to={'/admin/profile'} className='flex gap-3 px-[10px]'>
                    <img className='w-4' src={setting} alt="Setting" />
                    <p className='text-neutral3'>Settings</p>
                </NavLink>
                <div className='flex gap-3 px-[10px]'>
                    <img className='w-4' src={logout} alt="Logout" />
                    <p className='text-[#D55F5A] text-[14px]'>Keluar Akun</p>
                </div>
            </div>
        </div>
    );
}

export default SidebarAdmin;

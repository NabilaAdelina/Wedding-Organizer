import NavbarProfile from './SettingLayout/NavbarProfile'
import SidebarProfile from './SettingLayout/SidebarProfile'

const SettingProfile = () => {
    return (
        <div>
            <NavbarProfile />
            <SidebarProfile />
            <div className='w-full h-screen pt-[170px] pl-[270px]'>
                <h1 className='font-medium 2xl:text-[32px] text-[22px] text-neutral4'>Edit Profile</h1>
            </div>
        </div>
    )
}

export default SettingProfile

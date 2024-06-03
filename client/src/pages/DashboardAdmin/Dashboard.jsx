import React from 'react'
import Footer from '../../components/Footer'
import ClientName from './DashboardLayout/ClientName'
import VendorMenu from './DashboardLayout/Vendor Acara/VendorMenu'
import Pakaian from './DashboardLayout/Pakaian/PakaianMenu'
import SidebarAdmin from '../../pages/Admin/components/SidebarAdmin'
import NavbarAdmin from '../../pages/Admin/components/NavbarAdmin'
import KonsepMenu from './DashboardLayout/Konsep Acara/KonsepMenu'

const Dashboard = () => {
    return (
        <>
        <div className="min-h-screen flex flex-col">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <div className='w-flex flex-1 mt-[100px]'>
                    <ClientName />
                    <VendorMenu />
                    <Pakaian />
                    <KonsepMenu />
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Dashboard

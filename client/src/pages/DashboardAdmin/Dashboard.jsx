import React from 'react'
import Header from '../../components/HeaderAdmin'
import Footer from '../../components/Footer'
import ClientName from './DashboardLayout/ClientName'
import VendorMenu from './DashboardLayout/VendorMenu'
import SidebarAdmin from './DashboardLayout/SidebarAdmin'

const Dashboard = () => {
    return (
        <>
        <div className='bg-primary5'>
            <Header />
            <div className='flex'>
                <div>
                    <SidebarAdmin />
                </div>
                <div className='w-full'>
                    <ClientName />
                    <VendorMenu />
                    <VendorMenu />
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Dashboard

import React from 'react'
import Footer from '../../../components/Footer';
import ClientName from './DashboardLayout/ClientName'
import KonsepMenu from './DashboardLayout/Konsep Acara/KonsepMenu'
import VendorMenu from './DashboardLayout/Vendor Acara/VendorMenu'
import DetailMenu from './DashboardLayout/Detail Acara/DetailMenu'
import DecorMenu from './DashboardLayout/Decoration/DecorMenu'
import Pakaian from './DashboardLayout/Pakaian/PakaianMenu'
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';


const Dashboard2 = () => {
    return (
        <>
        <div className="flex flex-col">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <div className='w-flex flex-1 mt-[100px]'>
                    <ClientName />
                    <VendorMenu />
                    <Pakaian />
                    <DecorMenu />
                    <KonsepMenu />
                    <DetailMenu />
                    <div className='flex justify-end'>
                        <button className='bg-neutral5 text-primary2 px-10 py-2 rounded-lg m-10'>
                        Simpan Konsep
                        </button>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Dashboard2

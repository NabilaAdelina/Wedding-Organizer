import React from 'react';

const SidebarAdmin = () => {
    return (
        <section className='p-2 bg-white border rounded-lg shadow-md m-3 mr-0 h-[750px]'>
        <div className="h-[700px] w-64  text-neutral5 flex flex-col">
        <div className="flex items-center p-4">
            <img src="https://via.placeholder.com/40" alt="Admin" className="rounded-full w-10 h-10" />
            <span className="ml-2">Admin Name</span>
        </div>
        <nav className="mt-4 flex-grow">
            <ul>
            <li className="flex items-center p-2 hover:bg-neutral1 cursor-pointer">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3h18v18H3V3z" />
                </svg>
                <span>Concept</span>
            </li>
            <li className="flex items-center p-2 hover:bg-neutral1 cursor-pointer">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v14l9 4 9-4V5l-9-4zm0 2.18l6.84 2.83L12 9.82 5.16 6.01 12 3.18zM4 8.91v7.78L11 19v-8.09L4 8.91zm8 8.09l7-2.31V8.91l-7 2.31v5.78z" />
                </svg>
                <span>Cost Plan</span>
            </li>
            <li className="flex items-center p-2 hover:bg-neutral1 cursor-pointer">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8h18V6H3v2zm2 11h14v-9H5v9zm1-8h12v7H6v-7zM4 4h16V3H4v1z" />
                </svg>
                <span>Schedule</span>
            </li>
            </ul>
        </nav>
        <div className="p-0">
            <ul>
            <li className="flex items-center p-2 hover:bg-neutral1 cursor-pointer">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-16c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 12h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span>Setting</span>
            </li>
            <li className="flex items-center p-2 hover:bg-neutral1 cursor-pointer">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 17H7V7h9V5H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h9v-2zm-3-5V5h-2v7H5v2h6v7h2v-7h6v-2h-6z" />
                </svg>
                <span>Log Out</span>
            </li>
            </ul>
        </div>
        </div>
        </section>
    );
};

export default SidebarAdmin;

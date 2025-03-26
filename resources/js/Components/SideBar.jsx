import ApplicationLogo from '@/Components/ApplicationLogo';
import React from 'react';
import NavLink from '@/Components/NavLink';

// Assuming you have icons stored in a folder like '/resources/icons/home.svg'
export default function SideBar({
    
}) {return (
        <div className="w-64 h-screen text-white p-4 fixed top-0 left-0">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-2">
                    <div className="h-12 w-12 rounded-full">
                        <img src="images\RainDesk_Logo.jpg" alt="Icon" className="rounded-full" />
                    </div>
                    <h1 className="text-2xl font-extrabold text-[#537A8A] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">RainDesk</h1>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-600">Pages</h2>
            <ul className="mt-4 flex flex-col gap-6">
                {/* Replace the Link elements with SideBarLink components */}
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\home_24dp_4B77D1_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Dashboard
                    </NavLink>
                </div>
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\support_agent_24dp_75FBFD_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Available Services
                    </NavLink>
                </div>
               
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\manage_accounts_24dp_D08216_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Account Management
                    </NavLink>
                </div>
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\api_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        API & External Application
                    </NavLink>
                </div>
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\group_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Users & Access Control
                    </NavLink>
                </div>
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\payments_24dp_48752C_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Payment & Subscription
                    </NavLink>
                </div>
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\partner_reports_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Reports & Logs
                    </NavLink>
                </div>
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6">
                        <img src="icons\settings_account_box_24dp_EA3323_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                    </div>
                    <NavLink
                        href={route('dashboard')}
                        active={route().current('dashboard')}
                    >
                        Settings & System Management
                    </NavLink>
                </div>
                {/* Add more links with icons as needed */}
            </ul>
            <h2 className="text-lg font-semibold text-gray-600 mt-4">Documentation</h2>
            <div className="flex flex-row items-center">
                <div className="h-6 w-6">
                    <img src="icons\api_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.png" alt="Icon" />
                </div>
                <NavLink
                    href={route('dashboard')}
                    active={route().current('dashboard')}
                >
                    App Documentation
                </NavLink>
            </div>
        </div>
    );
};




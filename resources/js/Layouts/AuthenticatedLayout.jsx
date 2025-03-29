import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import Sidebar from '@/Components/SideBar';
import SearchBar from "@/Components/SearchBar";


export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    
    const handleSearch = (query) => {
        // Handle search functionality here
    };
        return (
            <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white text-white p-4">
            {/* Sidebar content */}
            <div>
             <Sidebar />
            </div>
            </div>

            {/* Main content area */}
            <div className="flex-1 bg-gray-200">
            <nav className="bg-gray-200 fixed top-0 left-64 right-0 z-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
            <div className="flex my-auto">
                <SearchBar placeholder="Search ..." onSearch={handleSearch} />
            </div>
 
            {/* User dropdown container right aligned*/}
            <div className="hidden sm:ms-6 sm:flex sm:items-center">
            {/* Notification Icon button */}
            <button className="relative focus:outline-none">
                <div className="z-0">
                    <svg
                        className="h-6 w-6 text-gray-500 hover:text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0m6 0H9"
                        />
                    </svg>
                </div>
                <span className="absolute top-0 right-0 text-white bg-red-600 w-4 h-4 rounded-full z-10 text-xs font-bold" style={{ transform: 'translate(50%, -50%)', fontSize: '0.75rem', verticalAlign: 'super' }}>
                3
                </span>
            </button>
            

            <div className="relative ms-3">
            <Dropdown>
            <Dropdown.Trigger>
            <span className="inline-flex rounded-md">
            <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-200 px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
            >
            {user.name}
            <svg
            className="-me-0.5 ms-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            >
            <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
            />
            </svg>
            </button>
            </span>
            </Dropdown.Trigger>
            <Dropdown.Content>
            <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
            <Dropdown.Link href={route('logout')} method="post" as="button">
            Log Out
            </Dropdown.Link>
            </Dropdown.Content>
            </Dropdown>
            </div>
            </div>
            </div>
            </div>
            </nav>

            {header && (
            <header className="bg-gray-200 mt-16">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {header}
            </div>
            </header>
            )}

            <div className="overflow-x-auto">
            <main>{children}</main>
            </div>
            
            </div>
        </div>
        );
    }
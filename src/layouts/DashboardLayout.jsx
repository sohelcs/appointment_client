// DashboardLayout.js
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DashboardLayout = ({ children }) => {
    const [showCategory, setShowCategory] = useState(false);
    const [showService, setShowService] = useState(false);
    const [showProfessional, setShowProfessional] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="bg-gray-800 text-white w-80 flex-shrink-0">
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <nav className="space-y-2">
                    <div>
                        <button className="w-full flex items-center justify-between px-4 py-2 text-left text-sm font-medium text-[#333]" onClick={() => setShowCategory(!showCategory)}>
                            <span>Category</span>
                            <span>{showCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </button>
                        {showCategory &&
                            <ul className="ml-4 space-y-1">
                                <li>
                                    <Link href="/dashboard/add-category">
                                        <a className="text-[#333]">Add Category</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/all-categories">
                                        <a className="text-[#333]">All Categories</a>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                    <div>
                        <button className="w-full flex items-center justify-between px-4 py-2 text-left text-sm font-medium text-[#333]" onClick={() => setShowService(!showService)}>
                            <span>Service</span>
                            <span>{showService ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </button>
                        {showService &&
                            <ul className="ml-4 space-y-1">
                                <li>
                                    <Link href="/dashboard/add-service">
                                        <a className="text-[#333]">Add Service</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/all-services">
                                        <a className="text-[#333]">All Services</a>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                    <div>
                        <button className="w-full flex items-center justify-between px-4 py-2 text-left text-sm font-medium text-[#333]" onClick={() => setShowProfessional(!showProfessional)}>
                            <span>Professionals</span>
                            <span>{showProfessional ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                        </button>
                        {showProfessional &&
                            <ul className="ml-4 space-y-1">
                                <li>
                                    <Link href="/dashboard/add-professional">
                                        <a className="text-[#333]">Add Professional</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/all-professionals">
                                        <a className="text-[#333]">All Professionals</a>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </div>
                </nav>
            </aside>

            {/* Main content */}
            <main className="flex-1 p-4">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;

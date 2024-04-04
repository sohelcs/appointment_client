// DashboardLayout.js
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DashboardLayout = ({ children }) => {

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className="bg-gray-800 text-white w-80 flex-shrink-0">
                <div className="p-4">
                    <h1 className="text-2xl font-semibold">Dashboard</h1>
                </div>
                <nav className="space-y-2">
                        <ul className="ml-4 space-y-1">
                            <li>
                                <Link href="/dashboard/appointments">
                                    <p className="text-[#333]">My Appointments</p>
                                </Link>
                            </li>
                        </ul>
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

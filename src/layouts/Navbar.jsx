import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { CiLogin, CiLogout } from "react-icons/ci";

const Navbar = () => {
    const [token, setToken] = useState(Cookies.get('accessToken'));
    const [authorized, setAuthorized] = useState(false);
    const email = Cookies.get('email');
    const logout = () => {
        // Remove all cookies by using the '*' wildcard
        const cookies = Cookies.get();
        for (const cookie in cookies) {
            Cookies.remove(cookie);
        }
        // Update the token state to reflect the logout
        setToken(null);
    };

    useEffect(() => {
        if (email || token) {
            setAuthorized(true)
        }
    }, [token, email]);

    return (
        <div style={{ justifyContent: 'space-around', paddingTop: "1.5rem", paddingBottom: "1.5rem", position: 'fixed', width: '100%' }} className=" w-full bg-[#fff] mx-auto flex items-center lg:md:px-6 px-4">
            <Link href="/" >
                <Image src="https://i.ibb.co/V3LJrK9/Slotify-1.png" alt="logo" width={200} height={100} />
            </Link>
            <div className="">
                <ul style={{ columnGap: '20px', color: '#030303' }} className='flex items-center justify-center gap-x-[10px] font-rubik text-xl font-normal'>
                    <li className="text-[#030303] hover:text-primary cursor-pointer menuNav">Documentation</li>
                    <li className=" text-[#030303] hover:text-primary cursor-pointer menuNav">Contact</li>
                </ul>
            </div>
            <div className="">
                <div style={{ columnGap: '20px', color: '#030303' }} className='flex items-center gap-x-4 font-rubik font-normal'>
                    {authorized ? <button onClick={logout} className="text-3xl menuNav"><CiLogout /></button> : <Link className="text-3xl menuNav" href="/login"><CiLogin /></Link>}
                    {authorized && <Link className="text-3xl menuNav" href="/dashboard/appointments"><BiSolidDashboard /></Link>}

                </div>
            </div>
        </div>
    );
};

export default Navbar;
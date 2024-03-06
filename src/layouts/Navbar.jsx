import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidDashboard } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
    const token = Cookies.get('token')
    return (
        <div style={{ justifyContent: 'space-around', paddingTop: "1.5rem", paddingBottom: "1.5rem", position: 'fixed', width: '100%' }} className="max-w-[1440px] w-full bg-[#fff] mx-auto flex items-center lg:md:px-6 px-4">
            <div>
                <Image src="https://i.ibb.co/V3LJrK9/Slotify-1.png" alt="logo" width={200} height={100} />
            </div>
          <div className="lg:md:block hidden">
              <ul style={{ columnGap: '20px' }} className='flex items-center justify-center gap-x-[10px] font-rubik text-xl font-normal'>
                    <li className="text-[#030303] hover:text-primary cursor-pointer menuNav">Documentation</li>
                    <li className=" text-[#030303] hover:text-primary cursor-pointer menuNav">Contact</li>
            </ul>
          </div>
            <div className="lg:md:block hidden">              
                <div style={{ columnGap: '20px' }} className='flex items-center gap-x-4 font-rubik font-normal'>
                <Link className="text-3xl menuNav" href="/login"><CiLogin/></Link>
                    <Link className="text-3xl menuNav" href="/dashboard"><BiSolidDashboard/></Link>
            </div>
             </div>
        </div>
    );
};

export default Navbar;
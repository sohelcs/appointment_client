import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const VerifyOTP = () => {
    const [otp, setOtp] = useState(null);
    const email = Cookies.get('email');
    const router = useRouter();
        const verifyOTP = async () => {
            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/auth/verifyOTP`, { 
                    otp: Number(otp),
                    email
                 });
                console.log(res);
                if (res.data.statusCode === 200) {
                    console.log(res.data);
                    router.push('/')
                } else {
                    console.log(res.data.message)
                    toast("Invalid OTP")
                }
             
            } catch (e) {
                console.log(e)
         } 
        }
    return (
        <div className='bg-[#fff] h-screen my-auto flex items-center'>
            <div className='w-[50vw] h-[40vh] bg-[#f5f5f5] p-6 text-center mx-auto my-auto'>
                <h1 className='text-3xl text-[#333]'>Verify your email</h1>
                <h2 className='text-xl text-[#333] font-rubik'>A verification code has been sent in your email</h2>

                <input
                    type="text"
                    placeholder="OTP" 
                    onChange={(e) => setOtp(e.target.value)}
                    className="input input-bordered w-full mb-12 mt-8 max-w-lg bg-[#f5f5f5]" />
                
                <button onClick={verifyOTP} className='btn btn-primary w-full max-w-lg rounded-none bg-[#3E58C1] text-[#fff] text-xl'>Verify</button>
            </div>            
        </div>
    );
};

export default VerifyOTP;
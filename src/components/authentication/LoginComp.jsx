import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Cookies from 'js-cookie'; 
import server from '@/config/config';
import Image from 'next/image';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const LoginComp = () => {
    const [show, setShow] = useState(false);
    const [user, setUser] = useState(true);
    const [org, setOrg] = useState(false);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onLogin = async (data) => {
        try {
            console.log(data)
            const res = await axios.post(`http://localhost:5000/api/v1/auth/login`, data);
            if (res.data.statusCode === 200) {
                console.log(res.data);
                Cookies.set("accessToken", res.data.data.token); 
                Cookies.set("refreshToken", res.data.data.refreshToken);
                toast("Logged in successfully")
                router.push('/')
            }
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className=" w-full mx-auto">
            <div className="grid lg:md:grid-cols-2 items-center min-h-screen">
                <div className='bg-gradient-to-br from-[#424585] to-[#333] text-white min-h-screen'>
                    <div>
                        <Link href='/'>
                            <Image
                                src="https://i.ibb.co/h8Dr5zL/Slotify-removebg-preview.png"
                                alt="logo"
                                width={300}
                                height={200} />
                        </Link>
                    </div>

                    <div className="px-20">
                        <h2 className='text-5xl font-bold font-playfair'>Login to Make Most of</h2>
                        <h2 className='text-5xl font-bold bg-[#fff] inline-block text-[#3E58C1] px-4 mt-4 mb-10'>Your Time</h2>

                        <p className="font-rubik text-xl font-normal">We know the value of your time. Connect with us to make your life easier and more productive</p>

                        <h2 className="text-[18px] mt-10 font-rubik">Don&apos;t have an account? <Link href="/signup" className="underline">signup</Link></h2>

                    </div>

                </div>
                <div className="p-8">

                    <div className="flex justify-center w-full mt-6">
                        <form className="w-full" onSubmit={handleSubmit(onLogin)}>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="input input-bordered w-full min-w-xl bg-[#f5f5f5] rounded-none outline-[0px] mt-2"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div>
                                <input
                                    type={show ? 'text' : 'password'}
                                    placeholder="Your password"
                                    className="input input-bordered w-full min-w-xl bg-[#f5f5f5] rounded-none outline-[0px] mt-2"
                                    {...register("password", { required: true })}
                                />
                                <h2 className="cursor-pointer absolute bottom-[37vh] text-2xl right-[3vw]" onClick={() => setShow(!show)}>{show ? <FaEye /> : <FaEyeSlash />}</h2>
                            </div>
                            <button type="submit" className="btn btn-primary w-full mt-4 rounded-none bg-[#3E58C1] text-[#fff] text-xl">Login</button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginComp;
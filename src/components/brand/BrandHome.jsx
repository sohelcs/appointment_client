import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const BrandHome = () => {
    const slug = useRouter().query.slug
    const [services, setServices] = useState([])
    const brandName = Cookies.get("name");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getServiceByBrand = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/service/getAllServices?brand=${slug}`);
                console.log(res)
                if(res.status === 200) {
                    setServices(res.data.data);
                    setLoading(false)
                }
            } catch (e) {
                console.log(e)
                setLoading(false);
            }
        }

        getServiceByBrand();
    }, [slug])
    return (
        <div>
            <div className='bg-[#4156C0] bg-opacity-80 p-6 text-center mx-auto my-auto h-[40vh] lg:md:pt-[5%]'>
                <h2 className='text-4xl text-[#fff] capitalize font-rubik lg:md:pt-[6%]'>{brandName}</h2>
            </div>
            <div className='max-w-[1380px] w-full mx-auto mt-8'>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 font-rubik'>
                    {services.map((service, index) => (
                        <div key={index} className='bg-[#f5f5f5] p-4 rounded-lg mx-auto flex flex-col items-center justify-between border-[#ddd] border-[2px] '>
                            
                            <div>
                                <Image
                                    width={400}
                                    height={200}
                                    alt={service.title}
                                    src={service.image}
                                    className='rounded-md mb-2 h-[300px] w-full'
                                />
                                <h1 className='text-2xl text-[#333] font-rubik mt-2 text-start'>{service.title}</h1>

                                <div className='w-full flex items-center justify-between mb-3'>
                                    <h1 className='text-lg font-normal text-[#333]'>{service.min_time}min - {service.max_time}min</h1>
                                    <h2 className="text-3xl font-semibold text-[#312929]">${service.price}</h2>
                                </div>
                                <p className='text-[18px] text-[#6a6a6a] font-rubik'>{service.description}</p>

                            </div>
                            <button className="bg-[#4156C0] py-2 text-lg w-full text-center text-[#fff] mt-8 rounded-md">Book</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BrandHome;
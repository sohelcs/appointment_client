import axios from 'axios';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ChooseProfessional = ({ selectedProfessional, setSelectedProfessional, step, setStep }) => {
    const [professionals, setProfessionals] = useState([]);
    const slug = useRouter().query.slug;
    useEffect(() => {
        const getProfessionals = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/professional/getAllProfessionals?brand=${slug}`);
                console.log(res)
                if (res.status === 200) {
                    setProfessionals(res.data.data);
                }
            }catch (error) {
                console.log(error)
            }
        }
        getProfessionals();
    }, [slug]);

    useEffect(() => {
        if (selectedProfessional !== null) {
          Cookies.set('professional', JSON.stringify(selectedProfessional), { expires: 1 });
        }
    }, [selectedProfessional]);
    return (
        <div className=''>
            <h2 style={{ color: '#3E58C1' }} className='pb-4 text-2xl '>Select a Professional</h2>
            <div className='grid lg:md:grid-cols-3 grid-cols-2 gap-4'>
                {professionals.map((professional, index) => (
                    <div key={index}
                        style={{hover: "shadow-lg"}}
                        className='flex flex-col justify-center items-center bg-[#f5f5f5] p-4 rounded-lg cursor-pointer transition-all duration-150 hover:shadow-md'
                        onClick={() => setSelectedProfessional(professional)}>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <Image
                                    className='rounded-full pb-4'
                                    src={professional.image}
                                    alt={professional.name}
                                    width={100}
                                    height={80} />
                            </div>
                        </div>
                        
                        <p className="text-center font-rubik text-[#333] font-semibold">{professional.name}</p>
                    </div>
                ))}
            </div>
            <button className='mt-6 btn absolute right-0 bottom-[-9vh] bg-primary border-none text-[#fff] ' onClick={() => {
                setSelectedProfessional(null)
                setStep(step+1)
            }}>Skip</button>
        </div>
    );
};

export default ChooseProfessional;
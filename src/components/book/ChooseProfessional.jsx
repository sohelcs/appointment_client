import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ChooseProfessional = ({ setSelectedProfessional, step, setStep }) => {
    const [professionals, setProfessionals] = useState([]);
    const slug = useRouter().query.slug;

    const datas = [
        {
            "name": "John Doe",
            "description": "Experienced professional with expertise in various services.",
            "image": "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
            "services": ["Service A", "Service B", "Service C"],
            "available_days": [
                {
                    "date": "2024-03-10",
                    "available_slots": ["10:00 AM", "2:00 PM"]
                },
                {
                    "date": "2024-03-11",
                    "available_slots": ["11:00 AM", "3:00 PM"]
                }
            ]
        },
        {
            "name": "Jane Smith",
            "description": "Skilled professional specializing in specific services.",
            "image": "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
            "services": ["Service D", "Service E", "Service F"],
            "available_days": [
                {
                    "date": "2024-03-10",
                    "available_slots": ["9:00 AM", "1:00 PM"]
                },
                {
                    "date": "2024-03-12",
                    "available_slots": ["10:00 AM", "2:00 PM"]
                }
            ]
        },
        {
            "name": "Alex Johnson",
            "description": "Certified professional with years of experience.",
            "image": "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
            "services": ["Service G", "Service H", "Service I"],
            "available_days": [
                {
                    "date": "2024-03-11",
                    "available_slots": ["8:00 AM", "12:00 PM"]
                },
                {
                    "date": "2024-03-12",
                    "available_slots": ["9:00 AM", "1:00 PM"]
                }
            ]
        }
    ]

    useEffect(() => {
        const getProfessionals = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/professional/getAllProfessionals?brand=${slug}`);
                console.log(res);
                if (res.status === 200) {
                    setProfessionals(res.data);
                }
            }catch (error) {
                console.log(error)
            }
        }
        getProfessionals();
    }, [slug]);
    return (
        <div className=''>
            <h2 style={{ color: '#3E58C1' }} className='pb-4 text-2xl '>Select a Professional</h2>
            <div className='grid lg:md:grid-cols-3 grid-cols-2 gap-4'>
                {datas.map((professional, index) => (
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
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ChooseProfessional = ({ handleProfessionalSelection }) => {
    const [professionals, setProfessionals] = useState([]);
    const slug = useRouter().query.slug;
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
        <div>
            <h2 className='text-2xl font-semibold text-primary'>Select a Professional</h2>
            <div className='grid lg:md:grid-cols-5 grid-cols-3'>
                {professionals.map((professional, index) => (
                    <div key={index} onClick={() => handleProfessionalSelection(professional)}>
                        <Image
                            className='rounded-full pb-4'
                            src={professional.image}
                            alt={professional.name}
                            width={100}
                            height={100} />
                        <p className="text-center font-rubik text-primary">{professional.name}</p>
                    </div>
                ))}
            </div>
            <button className='mt-6 btn' onClick={() => handleProfessionalSelection(null)}>Skip</button>
        </div>
    );
};

export default ChooseProfessional;
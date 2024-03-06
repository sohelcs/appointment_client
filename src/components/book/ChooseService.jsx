import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ChooseService = () => {
    const [service, setService] = useState([]);
    const slug = useRouter().query.slug;
    useEffect(() => {
        const getServices = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/service/getAllServices?brand=${slug}`);
                if (res.status === 200) {
                    setService(res.data)
                }
            }catch (error) {
                console.log(error)
            }
        }
        getServices()
    }, [])
    return (
        <div className="grid lg:md:grid-cols-5 grid-cols-3">
            {service.map((item, index) => (
                <div key={index} onClick={() => handleServiceSelection(item)}>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ChooseService;
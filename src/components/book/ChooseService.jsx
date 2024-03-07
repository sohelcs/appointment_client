import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const ChooseService = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [service, setService] = useState([]);
    const slug = useRouter().query.slug;
    console.log(selectedServices)
    const datas = [
        {
            "title": "Smartphone",
            "category": "Electronics",
            "description": "A high-quality smartphone with advanced features.",
            "price": 799.99,
            "image": "https://example.com/smartphone-image.jpg",
            "brand": "TechCo",
            "min_time": 1,
            "max_time": 3
        },
        {
            "title": "Laptop",
            "category": "Electronics",
            "description": "A powerful laptop for work and entertainment.",
            "price": 1499.99,
            "image": "https://example.com/laptop-image.jpg",
            "brand": "TechCom",
            "min_time": 2,
            "max_time": 5
        },
        {
            "title": "Bluetooth Speaker",
            "category": "Electronics",
            "description": "A portable speaker with great sound quality.",
            "price": 99.99,
            "image": "https://example.com/speaker-image.jpg",
            "brand": "SoundX",
            "min_time": 1,
            "max_time": 2
        }
    ]

    // useEffect(() => {
    //     const getServices = async () => {
    //         try {
    //             const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/service/getAllServices?brand=${slug}`);
    //             if (res.status === 200) {
    //                 setService(res.data)
    //             }
    //         }catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getServices()
    // }, [slug])

    const handleServiceSelection = (item) => {
        if (selectedServices.includes(item)) {
            setSelectedServices(selectedServices.filter(service => service !== item));
        } else {
            setSelectedServices([...selectedServices, item]);
        }
    };
    return (
        <div>
            <h2 className='pb-2 text-2xl '>Choose Service</h2>
            <div className="grid lg:md:grid-cols-5 grid-cols-3 gap-x-4">
                {datas.map((item, index) => (
                    <div className={`p-4 bg-[#fff] rounded-sm shadow-lg cursor-pointer ${selectedServices.includes(item) ? 'border-green-500 border-4' : ''}`} key={index} onClick={() => handleServiceSelection(item)}>
                        {selectedServices.includes(item) && <AiOutlineCheckCircle className="absolute top-2 right-2 text-green-500 text-2xl" />}
                        <h2 style={{ color: '#333' }} className="text-xl mb-2">{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChooseService;
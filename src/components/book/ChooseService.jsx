import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChooseService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        const getServices = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/service/getAllServices`);
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
        <div>
            
        </div>
    );
};

export default ChooseService;
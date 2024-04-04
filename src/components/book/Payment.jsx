import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Payment = ({ handlePercentageSelection }) => {
    const percentages = [25, 50, 75, 100];
    const [services, setServices] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalPayable, setTotalPayable] = useState(0);
    const [selectedPercentage, setSelectedPercentage] = useState(100);

    useEffect(() => {
        // Retrieve services data from cookies and parse it to JSON format
        const servicesData = JSON.parse(Cookies.get("services"));
        setServices(servicesData);

        // Calculate total price
        let total = 0;
        servicesData.forEach(service => {
            total += service.price;
        });
        setTotalPrice(total);

        // Calculate total payable amount based on selected percentage
        const calc = (total * selectedPercentage) / 100;
        setTotalPayable(calc);

        Cookies.set("payable", totalPayable)
        Cookies.set("total", totalPrice)
    }, [selectedPercentage]); // Listen for changes in selectedPercentage

    console.log(selectedPercentage)

    return (
        <div>
            <div style={{ color: '#3E58C1' }} className='pb-4 text-2xl '>
                <h2>Total Price: ${totalPrice}</h2>
                <h2>Total Payable: ${totalPayable}</h2>
            </div>
            <h2 style={{ color: '#3E58C1' }} className='pb-4 text-xl mt-6'>Select Payment Percentage</h2>
            <ul>
                <select 
                defaultValue={100}
                onChange={(e) => 
                            setSelectedPercentage(e.target.value)} className="select select-bordered w-full max-w-md bg-[#fff]">
                    {percentages.map((percentage, index) => (
                        <option key={index} value={percentage} >{percentage}%</option>
                    ))}
                </select>
            </ul>
        </div>
    );
};

export default Payment;

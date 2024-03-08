import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChooseTime = ({ selectedDate, setSelectedDate, setSelectedSlot, handleNextStep, selectedProfessional }) => {
    const [availableSlots, setAvailableSlots] = useState([]);
    const [nextTenDays, setNextTenDays] = useState([]);

    useEffect(() => {
        const today = new Date();
        const tenDaysLater = new Date(today);
        tenDaysLater.setDate(today.getDate() + 10);

        const dates = [];
        for (let date = new Date(today); date <= tenDaysLater; date.setDate(date.getDate() + 1)) {
            dates.push(new Date(date));
        }
        setNextTenDays(dates);
    }, []);

    useEffect(() => {
        // If a professional is selected, fetch available slots for that professional and selected date
        if (selectedProfessional) {
            fetchProfessionalSlots(selectedProfessional, selectedDate);
        } else {
            // If no professional is selected, fetch available slots for all professionals and selected date
            fetchAllProfessionalSlots(selectedDate);
        }
    }, [selectedDate, selectedProfessional]);

    const fetchProfessionalSlots = async (professional, date) => {
        try {
            const response = await axios.get(`/api/professional/${professional}/slots?date=${date}`);
            setAvailableSlots(response.data.slots);
        } catch (error) {
            console.error('Error fetching professional slots:', error);
            // Handle error
        }
    };

    const fetchAllProfessionalSlots = async (date) => {
        try {
            const response = await axios.get(`/api/professionals/slots?date=${date}`);
            setAvailableSlots(response.data.slots);
        } catch (error) {
            console.error('Error fetching all professionals slots:', error);
            // Handle error
        }
    };

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
        handleNextStep();
    };

    const handleDateSelection = (date) => {
        setSelectedDate(date.toISOString().split('T')[0]);
    };
    const getFormattedDate = (date) => {
        const options = { day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const getDayName = (date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return days[date.getDay()];
    };

    return (
        <div>
            <h2 style={{ color: '#3E58C1' }} className='pb-4 text-2xl '>Select a Date</h2>
            <ul className='grid grid-cols-11 gap-4'>
                {nextTenDays.map((date, index) => (
                    <li className='cursor-pointer text-center hover:bg-[#ddd] rounded-md ' key={index} onClick={() => handleDateSelection(date)}>
                        <div className='text-lg text-[#333]'>{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                        <div className='font-semibold text-[#333] fontrubik'>{getFormattedDate(date)}</div>
                        <div className='text-[#424242]'>{getDayName(date)}</div>
                    </li>
                ))}
            </ul>
            {selectedDate && (
                <>
                    <h2 style={{ color: '#3E58C1' }} className='pt-8 pb-4 text-2xl '>Available Slots for {new Date(selectedDate).getDate()}th {new Date(selectedDate).toLocaleDateString('en-US', { month: 'long' })}</h2>
                    {availableSlots.length > 0 ? (
                        <ul>
                            {availableSlots.map((slot, index) => (
                                <li key={index} onClick={() => handleSlotSelection(slot)}>
                                    {slot}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No slots available</p>
                    )}
                </>
            )}
        </div>
    );
};

export default ChooseTime;

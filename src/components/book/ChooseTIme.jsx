import React from 'react';

const ChooseTIme = ({ availableDates, handleTimeSelection }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleDateSelection = (date) => {
        setSelectedDate(date);
        // Fetch available slots for the selected date from the backend
        // Example: axios.get(`/api/slots?date=${date}`).then(response => setSlots(response.data.slots));
    };

    const handleSlotSelection = (slot) => {
        setSelectedSlot(slot);
        handleTimeSelection(selectedDate, slot);
    };

    return (
        <div>
            <h2>Select a Date</h2>
            <ul>
                {availableDates.map((date, index) => (
                    <li key={index} onClick={() => handleDateSelection(date)}>
                        {date}
                    </li>
                ))}
            </ul>
            {selectedDate && (
                <>
                    <h2>Available Slots for {selectedDate}</h2>
                    <ul>
                        {/* Replace slots with actual available slots for the selected date */}
                        {/* {slots.map((slot, index) => ( */}
                        {['9:00 AM', '10:00 AM', '11:00 AM'].map((slot, index) => (
                            <li key={index} onClick={() => handleSlotSelection(slot)}>
                                {slot}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default ChooseTIme;
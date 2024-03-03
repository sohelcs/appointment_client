import React, { useState } from 'react';
import ChooseService from './ChooseService';
import ChooseProfessional from './ChooseProfessional';
import ChooseTIme from './ChooseTIme';
import Payment from './Payment';

const Appointment = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handleServiceSelection = (service) => {
        setSelectedService(service);
        setStep(step + 1);
    };

    const handleProfessionalSelection = (professional) => {
        setSelectedProfessional(professional);
        setStep(step + 1);
    };

    const handleTimeSelection = (date, slot) => {
        setSelectedDate(date);
        setSelectedSlot(slot);
        setStep(step + 1);
    };

    const handlePaymentSelection = (payment) => {
        setSelectedPayment(payment);
        // Process the booking with selectedService, selectedProfessional, selectedDate, selectedSlot, and selectedPayment
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return <ChooseService handleServiceSelection={handleServiceSelection} />;
            case 2:
                return <ChooseProfessional handleProfessionalSelection={handleProfessionalSelection} />;
            case 3:
                return <ChooseTIme handleTimeSelection={handleTimeSelection} />;
            case 4:
                return <Payment handlePaymentSelection={handlePaymentSelection} />;
            default:
                return null;
        }
    };
    return (
        <div>
            <h1>Book an Appointment</h1>
            <div>
                {renderStep()}
            </div>
            <div>
                {step > 1 && <button onClick={() => setStep(step - 1)}>Previous</button>}
                {step < 4 && <button onClick={() => setStep(step + 1)}>Next</button>}
            </div>
        </div>
    );
};

export default Appointment;
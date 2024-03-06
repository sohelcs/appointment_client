import React, { useState } from 'react';
import ChooseService from './ChooseService';
import ChooseProfessional from './ChooseProfessional';
import ChooseTIme from './ChooseTIme';
import Payment from './Payment';

const Appointment = () => {
    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState([]);
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    
    const handleNextStep = () => {
        setStep(step + 1);
    }


    const renderStep = () => {
        switch (step) {
            case 1:
                return <ChooseService
                    setSelectedService={setSelectedService}
                    handleNextStep={handleNextStep} />;
            case 2:
                return <ChooseProfessional
                    setSelectedProfessional={setSelectedProfessional}
                    handleNextStep={handleNextStep} />;
            case 3:
                return <ChooseTIme
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    setSelectedSlot={setSelectedSlot}
                    handleNextStep={handleNextStep} />;
            case 4:
                return <Payment
                    setSelectedPayment={setSelectedPayment}
                    handleNextStep={handleNextStep} />;
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
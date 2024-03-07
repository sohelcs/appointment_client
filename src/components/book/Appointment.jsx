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
    return (
        <div className="bg-[#f5f5f5] h-screen pt-[15vh]">
        <div className="max-w-[1440px] mx-auto">        
            <h1 style={{color: '#030303'}} className="text-3xl font-semibold font-rubik text-[#0303003] text-center">Book an Appointment</h1>
            <div className="pt-24 pb-8">
                {step == 1 ? (
                     <ChooseService
                    setSelectedService={setSelectedService}
                    handleNextStep={handleNextStep} />
                ) : step == 2 ? (
                     <ChooseProfessional
                    setSelectedProfessional={setSelectedProfessional}
                    handleNextStep={handleNextStep} />   
                ) : step == 3 ? (
                    <ChooseTIme
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    setSelectedSlot={setSelectedSlot}
                    handleNextStep={handleNextStep} />
                ) : (
<Payment
                    setSelectedPayment={setSelectedPayment}
                    handleNextStep={handleNextStep} />
                )}
            </div>
            <div>
                {step > 1 && <button className='btn btn-primary' onClick={() => setStep(step - 1)}>Previous</button>}
                {step < 4 && <button className='btn btn-primary' onClick={() => setStep(step + 1)}>Next</button>}
            </div>
            </div>
        </div>
    );
};

export default Appointment;
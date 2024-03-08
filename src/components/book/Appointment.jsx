import React, { useState } from 'react';
import ChooseService from './ChooseService';
import ChooseProfessional from './ChooseProfessional';
import ChooseTIme from './ChooseTIme';
import Payment from './Payment';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import Image from 'next/image';

const Appointment = () => {
    const [step, setStep] = useState(1);
    const [selectedProfessional, setSelectedProfessional] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);

    const handleNextStep = () => {
        setStep(step + 1);
    }
    return (
        <div className="bg-[#f5f5f5] h-screen pt-[15vh]">
            <div style={{gridTemplateColumns: 'repeat(12, 1fr)', columnGap: '20px'}} className="max-w-[1440px] mx-auto grid grid-cols-2 col-span-12">
                <div className='col-span-8 bg-[#fff] p-4 rounded-md'>
                    <h1 style={{ color: '#030303' }} className="text-3xl font-semibold font-rubik text-[#0303003] text-start">Book an Appointment</h1>
                    <div className="pt-12 pb-8">
                        {step == 1 ? (
                            <ChooseService
                                setSelectedServices={setSelectedServices}
                                selectedServices={selectedServices} />
                        ) : step == 2 ? (
                            <ChooseProfessional
                                    setSelectedProfessional={setSelectedProfessional}
                                    step={step}
                                setStep={setStep}/>
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
                    <div className='flex items-center gap-x-4'>
                        {step > 1 && <button style={{ color: '#3E58C1' }} className='btn text-xl bg-[#fff] border-primary border-[2px]' onClick={() => setStep(step - 1)}><MdOutlineArrowBackIos /></button>}
                        {step < 4 && <button style={{ color: '#fff' }} className='btn text-xl bg-primary border-none' onClick={() => setStep(step + 1)}><MdOutlineArrowForwardIos /></button>}
                    </div>
                </div>
                <div className='col-span-4 bg-[#fff] p-4 rounded-md'>
                    <h1 style={{ color: '#030303' }} className="text-3xl font-semibold font-rubik text-[#0303003] text-start">Appointment Details</h1>
                    <p className='pt-2 font-rubik'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>

                    <div className='mt-2'>
                        <h2 style={{ color: '#3E58C1' }} className='text-xl font-playfair mb-4'>Selected services</h2>

                        {/* service */}
                        <div style={{flexDirection: 'column'}} className="flex flex-cols gap-y-2">
                            {selectedServices.map((item, index) => (
                                <div key={index} className='flex justify-between bg-[#f5f5f5] rounded-md'>
                                    <p style={{ color: '#333' }}  className='font-rubik p-2 '>{item.title}</p>
                                     <p style={{ color: '#333' }} className='font-rubik p-2 font-semibold'>${item.price}</p>
                               </div>
                            ))}
                        </div>
                    </div>

                    {/* professional */}
                    <div className='mt-2'>
                        <h2 style={{ color: '#3E58C1' }} className='text-xl font-playfair mb-4'>Selected Professional</h2>
                        {selectedProfessional ? (
                            <div className="flex items-center justify-between p-4">
                                <div className="avatar">
                                    <div className="w-16 h-16 rounded-full">
                                        <Image
                                            className='rounded-full pb-4'
                                            src={selectedProfessional.image}
                                            alt={selectedProfessional.name}
                                            width={100}
                                            height={100} />
                                    </div>
                                </div>
                                <h2 className='font-rubik text-lg text-[#333]'>{selectedProfessional.name}</h2>
                            </div>
                        ): (
                            <p className='font-rubik text-[#333]'>Any Professional</p>
                        )}
                      
                    </div>

                    {/* time */}
                    <div className='mt-2'>
                        <h2 style={{ color: '#3E58C1' }} className='text-xl font-playfair mb-4'>Selected Time</h2>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
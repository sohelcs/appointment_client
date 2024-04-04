import axios from 'axios';
import Cookies from 'js-cookie';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MySwal = withReactContent(Swal);

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [profs, setProfs] = useState({});
    const email = Cookies.get("email")
    useEffect(() => {
        const getAppointments = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/appointment/getUserAppointments/afnanferdousi550@gmail.com`);
                if (res.status === 200) {
                    console.log(res.data.data)
                    setAppointments(res.data.data);
                }
            } catch (e) {
                console.log(e)
            }
        }

        const getProfs = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/professional/getAllProfessionals`);
                if (res.status === 200) {
                    setProfs(res.data.data);
                }
            } catch (e) {
                console.log(e)
            }
        }
        getProfs()
        getAppointments()


    }, [email])
    

    const getProfessionalName = (professionalId) => {
        const professional = profs.find(prof => prof._id === professionalId);
        return professional ? professional.name : '';
    };

    const handleCancel = async (appointmentId) => {
        try {
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/appointment/cancelAppointment/${appointmentId}`);
            if (response.status === 200) {
                setAppointments(appointments.filter((appointment) => appointment._id !== appointmentId));
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = (appointmentId) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                handleCancel(appointmentId);
                MySwal.fire(
                    'Deleted!',
                    'Your appointment has been deleted.',
                    'success'
                );
            }
        })
    };

    return (
        <div className="h-screen rounded-sm lg:md:pt-[15vh] px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1 relative max-w-[1500px] mx-auto">
            <h4 className="mb-6 text-3xl font-semibold text-black">
                My Appointments
            </h4>

            <div className="flex flex-col font-rubik">
                <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 border">
                    <div className="p-2.5 xl:p-5">
                        <h5 className="font-semibold xsm:text-base text-[#333] text-[18px]">
                            Date
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="font-semibold xsm:text-base text-[#333] text-[18px]">
                            Time
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="font-semibold xsm:text-base text-[#333] text-[18px]">
                            Professional
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="font-semibold xsm:text-base text-[#333] text-[18px]">
                            Total
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="font-semibold xsm:text-base text-[#333] text-[18px]">
                            Paid
                        </h5>
                    </div>
                    <div className="p-2.5 text-center xl:p-5">
                        <h5 className="font-semibold xsm:text-base text-[#333] text-[18px]">
                            Actions
                        </h5>
                    </div>
                </div>

                {appointments.map((appoint, index) => (
                    <React.Fragment key={index}>
                        <div
                            className={`grid grid-cols-6 border ${index === appoint.length - 1
                                ? ""
                                : "border-b border-stroke dark:border-strokedark"
                                }`}
                            key={`${index}-${index}`}
                        >
                            <div className="flex items-center justify-center p-2.5 xl:p-5 text-[16px]">
                                <p className="text-black">{appoint.date}</p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5 text-[16px]">
                                <p className="text-black">{appoint.time}</p>
                            </div>

                            <div className="flex items-center justify-center p-2.5 xl:p-5 text-[16px]">
                                <p className="text-black">{getProfessionalName(appoint.professional)}</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5 text-[16px]">
                                <p className="text-black">${appoint.total_price}</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5 text-[16px]">
                                <p className="text-black">${appoint.paid}</p>
                            </div>
                            <div className="flex items-center justify-center p-2.5 xl:p-5 text-[16px]">
                                <button
                                    className="text-xl bg-red-500 text-[#fff] rounded-full p-2"
                                    onClick={() => handleDelete(appoint._id)}><MdDelete /></button>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;
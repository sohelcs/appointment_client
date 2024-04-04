import MyAppointments from '@/components/dashboard/MyAppointments';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import React from 'react';

const Appointments = () => {
    return (
        <div>
            <Head>
                <title>My Appointments | Slotify</title>
            </Head>

            <MyAppointments/>
        </div>
    );
};

export default Appointments;
Appointments.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>
}
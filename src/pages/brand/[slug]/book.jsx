import Appointment from '@/components/book/Appointment';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Book = () => {
    const slug = useRouter().query.slug;
    console.log(slug)
    return (
        <div>
            <Head>
                <title>Book an appointment</title>
            </Head>
            <Appointment/>
            
        </div>
    );
};

export default Book;
Book.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>
}
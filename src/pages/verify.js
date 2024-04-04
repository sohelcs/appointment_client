import Head from 'next/head';
import React from 'react';
import VerifyOTP from '../components/authentication/VerifyOTP';

const Verify = () => {
    return (
        <div>
            <Head>
                <title>Verify</title>
            </Head>
            <VerifyOTP />
            
        </div>
    );
};

export default Verify;
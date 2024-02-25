import Head from 'next/head';
import React from 'react';
import SignupComp from './../components/authentication/SignupComp';

const Signup = () => {
    return (
        <div>
            <Head>
                <title>Sign Up | Slotify</title>
            </Head>

            <SignupComp/>
        </div>
    );
};

export default Signup;
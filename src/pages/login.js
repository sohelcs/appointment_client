import React from 'react';
import Head from 'next/head'
import LoginComp from './../components/authentication/LoginComp';

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login | Slotify</title>
            </Head>
            <LoginComp/>
        </div>
    );
};

export default Login;
import React from 'react';
import Banner from '../components/home/Banner';
import MainLayout from '../layouts/MainLayout';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Slotify | Say no to no shows</title>
      </Head>
      <Banner/>
    </div>
  );
};

export default Home;
Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>
}
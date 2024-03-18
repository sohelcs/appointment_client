import BrandHome from '@/components/brand/BrandHome';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import React from 'react';

const SingleBrand = () => {
    const slug = useRouter().query.slug;
    console.log(slug)
    return (
        <div>
            <BrandHome />
            
        </div>
    );
};

export default SingleBrand;
SingleBrand.getLayout = function getLayout(page) {
    return <MainLayout>{page}</MainLayout>
}
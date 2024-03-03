import Head from 'next/head';
import React from 'react';
import AddCategoryComp from '../../components/category/AddCategoryComp';
import DashboardLayout from './../../layouts/DashboardLayout';

const AddCategory = () => {
    return (
        <div>
            <Head>
                <title>Add Category | Slotify</title>
            </Head>    
            
            <AddCategoryComp />
        </div>
    );
};

export default AddCategory;
AddCategory.getLayout = function getLayout(page) {
    return <DashboardLayout>{page}</DashboardLayout>
}
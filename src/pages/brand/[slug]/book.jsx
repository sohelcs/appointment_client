import { useRouter } from 'next/router';
import React from 'react';

const Book = () => {
    const slug = useRouter().query.slug;
    console.log(slug)
    return (
        <div>
            
        </div>
    );
};

export default Book;
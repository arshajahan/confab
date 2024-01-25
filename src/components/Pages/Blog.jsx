import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import { Blogs } from '../../assets/constants';
import { useParams } from 'react-router-dom';


function Blog() {

    const { id } = useParams();

    const selectedBlog = Blogs.find(item => item.path === id);

    return (
        <div>
            <div className='relative h-[600px] lg:h-screen flex items-center'>
                <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src={selectedBlog.src}
                alt={selectedBlog.path}
                />
                <WrapperCard className='z-10 text-white'>
                <h2 className='text-4xl lg:text-5xl font-semibold lg:w-3/4 '>{selectedBlog.title}</h2>
                </WrapperCard>
            </div>

            <WrapperCard className='text-main'>
                { selectedBlog.content}
            </WrapperCard>
        </div>
    )
}

export default Blog
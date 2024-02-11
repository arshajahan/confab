import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import { Blogs } from '../../assets/constants';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


function Blog() {

    const { id } = useParams();

    const selectedBlog = Blogs.find(item => item.path === id);

    return (
        <>
            <Helmet>
                <title>Confab International Blog</title>
                <meta 
                    name='description' 
                    content={selectedBlog.title}
                />
                <link rel='canonical' href={`/blog/${selectedBlog.path}`}/>
            </Helmet>
            <div>
                <div className='relative h-[600px] lg:h-screen flex items-center'>
                    <img
                    className='absolute top-0 left-0 w-full h-full object-cover z-0'
                    src={selectedBlog.src}
                    alt={selectedBlog.path}
                    />
                </div>

                

                <WrapperCard className='text-main'>
                    <div className='py-12 lg:px-48'>
                        <h1 className=' text-2xl lg:text-4xl'>{selectedBlog.title}</h1><br/>
                        <p className=''>{selectedBlog.date}</p><br/>
                        { selectedBlog.content}
                    </div>
                </WrapperCard>
            </div>
        </>
    )
}

export default Blog
import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import { Blogs } from '../../assets/constants';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function Blog() {
    const { id } = useParams();
    const selectedBlog = Blogs.find(item => item.path === id);

    // Function to handle WhatsApp sharing
    const shareViaWhatsApp = () => {
        const message = `Check out this blog: ${selectedBlog.title} - ${window.location.href}`;
        const text = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${text}`, '_blank');
    };

    return (
        <>
            <Helmet>
                <title>{selectedBlog.title}</title>
                <meta name='description' content={selectedBlog.title} />
                <meta property='og:title' content={selectedBlog.title} />
                <meta property='og:description' content={selectedBlog.title} />
                <meta property='og:image' content={selectedBlog.src} />
                <meta property='og:url' content={`https://confabint.com/blog/${selectedBlog.path}`} />
                <meta property='og:type' content='article' />
            </Helmet>
            <div>
                <div className='relative h-[600px] lg:h-screen flex items-center'>
                    <img
                        title={selectedBlog.title}
                        className='absolute top-0 left-0 w-full h-full object-cover z-0'
                        src={selectedBlog.src}
                        alt={selectedBlog.path}
                        height={100}
                        width={100}
                    />
                </div>
                <WrapperCard className='text-main'>
                    <div className='py-12 lg:px-48'>
                        <h1 className=' text-2xl lg:text-4xl'>{selectedBlog.title}</h1><br />
                        <div className='flex justify-between items-center mt-4'>
                            <p className=''>{selectedBlog.date}</p>
                            <div>
                                {/* WhatsApp share button */}
                                <button onClick={shareViaWhatsApp} className='bg-green-500 text-white text-xs px-3 py-2 rounded-md'>Share via WhatsApp</button>
                            </div>
                        </div>
                        <br />
                        {selectedBlog.content}
                    </div>
                </WrapperCard>
            </div>
        </>
    )
}

export default Blog;

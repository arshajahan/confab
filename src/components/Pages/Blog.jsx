import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import { Blogs } from '../../assets/constants';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { WhatsappShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share';

function Blog() {
    const { id } = useParams();
    const selectedBlog = Blogs.find(item => item.path === id);

    return (
        <>
            <Helmet>
                <title>{selectedBlog.title}</title>
                <meta name='description' content={selectedBlog.title} />
                <meta property='og:title' content={selectedBlog.title} />
                <meta property='og:description' content={selectedBlog.title} />
                <meta property='og:image' content={`https://confabint.com/logo.webp`} />
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
                                <WhatsappShareButton
                                    url={`https://confabint.com/blog/${selectedBlog.path}`}
                                    title={selectedBlog.title}
                                    style={{ backgroundColor: '#00FF00', color: '#FFFFFF' }}
                                    className='text-xs px-4 py-4 rounded-sm mr-2'
                                    >
                                    <FaWhatsapp style={{ fontSize: '24px' }} />
                                </WhatsappShareButton>
                                <LinkedinShareButton
                                    url={`https://confabint.com/blog/${selectedBlog.path}`}
                                    title={selectedBlog.title}
                                    style={{ backgroundColor: '#FFFF', color: '#0000FF' }}
                                    className='text-xs px-4 py-4 rounded-sm mr-2'
                                    >
                                    <FaLinkedin style={{ fontSize: '24px' }}/>
                                </LinkedinShareButton>
                                <FacebookShareButton
                                    url={`https://confabint.com/blog/${selectedBlog.path}`}
                                    quote={selectedBlog.title}
                                    style={{ backgroundColor: '#FFFF', color: '#0000FF' }}
                                    className='text-xs px-4 py-4 rounded-sm'
                                    >
                                    <FaFacebook style={{ fontSize: '24px' }}/>
                                </FacebookShareButton>

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

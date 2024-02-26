import React from 'react';
import { Blogs } from '../../assets/constants';
import WrapperCard from '../UI/WrapperCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import icons for WhatsApp, Facebook, and LinkedIn
import { WhatsappShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share'; // Import share buttons

function AllBlogs() {
  return (
    <>
      <Helmet>
          <title>Confab International Media</title>
          <meta 
              name='description' 
              content='Explore the latest STEM insights and industry news on the Confab International blog'
          />
          <link rel='canonical' href='/blogs'/>
      </Helmet>
      <div className=" text-main">
        <WrapperCard className='py-24 lg:py-48'>
          <h2 className="lg:text-4xl text-2xl font-bold mb-8">Our Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Blogs.map((blog) => (
              <div 
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    });
                }}
                key={blog.id} 
                className="bg-white px-6 py-8 rounded-lg shadow-lg relative"
              >
              <Helmet>
                <meta name='description' content={blog.title} />
                <meta property='og:title' content={blog.title} />
                <meta property='og:description' content={blog.title} />
                <meta property='og:image' content={blog.src} />
                <meta property='og:url' content={`https://confabint.com/blog/${blog.path}`} />
                <meta property='og:type' content='article' />
              </Helmet>

                <Link to={`/blog/${blog.path}`} className="block w-full h-full absolute inset-0"></Link>
                <img src={blog.src} title={blog.alt} height={100} width={100} alt={blog.alt} className="w-full h-36 object-cover mb-4 rounded-md" />
                <div className=' flex-col flex justify-between h-1/2'>
                  <h3 className="text-lg mb-2">{blog.title}</h3>
                  <span className="text-gray-500">{blog.date}</span>
                  <div className="flex space-x-2 absolute bottom-4 right-4">
                    <WhatsappShareButton
                        url={`https://confabint.com/blog/${blog.path}`}
                        title={blog.title}
                        style={{ backgroundColor: '#00FF00', color: '#FFFFFF' }}
                        className='text-xs px-4 py-4 rounded-sm '
                        >
                        <FaWhatsapp style={{ fontSize: '24px' }} />
                    </WhatsappShareButton>
                    <LinkedinShareButton
                        url={`https://confabint.com/blog/${blog.path}`}
                        title={blog.title}
                        style={{ backgroundColor: '#FFFF', color: '#0000FF' }}
                        className='text-xs px-4 py-4 rounded-sm '
                        >
                        <FaLinkedin style={{ fontSize: '24px' }}/>
                    </LinkedinShareButton>
                    <FacebookShareButton
                        url={`https://confabint.com/blog/${blog.path}`}
                        quote={blog.title}
                        style={{ backgroundColor: '#FFFF', color: '#0000FF' }}
                        className='text-xs px-4 py-4 rounded-sm'
                        >
                        <FaFacebook style={{ fontSize: '24px' }}/>
                    </FacebookShareButton>
                  </div>
                </div>
              </div>
              ))}
          </div>
        </WrapperCard>
      </div>
    </>
  );
}

export default AllBlogs;

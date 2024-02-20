import React from 'react';
import { Blogs } from '../../assets/constants';
import WrapperCard from '../UI/WrapperCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

function AllBlogs() {
  // Function to handle WhatsApp sharing
  const shareViaWhatsApp = (title, path) => {
    const message = `Check out this blog: ${title} - ${window.location.origin}/blog/${path}`;
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

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
                <meta name='description' content={selectedBlog.title} />
                <meta property='og:title' content={selectedBlog.title} />
                <meta property='og:description' content={selectedBlog.title} />
                <meta property='og:image' content={selectedBlog.src} />
                <meta property='og:url' content={`https://confabint.com/blog/${selectedBlog.path}`} />
                <meta property='og:type' content='article' />
              </Helmet>
              
                <Link to={`/blog/${blog.path}`} className="block w-full h-full absolute inset-0"></Link>
                <img src={blog.src} title={blog.alt} height={100} width={100} alt={blog.alt} className="w-full h-36 object-cover mb-4 rounded-md" />
                <div className=' flex-col flex justify-between h-1/2'>
                  <h3 className="text-lg mb-2">{blog.title}</h3>
                  <span className="text-gray-500">{blog.date}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      shareViaWhatsApp(blog.title, blog.path);
                    }} 
                    className="absolute bottom-4 right-4 bg-green-500 text-white rounded-full p-2 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
                  >
                    <FaWhatsapp />
                  </button>
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

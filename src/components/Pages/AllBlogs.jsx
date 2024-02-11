// AllBlogs.js
import React from 'react';
import { Blogs } from '../../assets/constants';
import WrapperCard from '../UI/WrapperCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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
              <Link
                  onClick={() => {
                      window.scrollTo({
                          top: 0,
                          behavior: 'smooth',
                      });
                  }} 

                  to={`/blog/${blog.path}`}

                  key={blog.id} className="bg-white px-6 py-8 rounded-lg shadow-lg"
              >
                  <img src={blog.src} alt={blog.alt} className="w-full h-36 object-cover mb-4 rounded-md" />
                  <div className=' flex-col flex justify-between h-1/2 '>
                      <h3 className="text-lg mb-2">{blog.title}</h3>
                      {/* <p className="text-gray-600 mb-4">{blog.description}</p> */}
                      <span className="text-gray-500">{blog.date}</span>
                  </div>
                  {/* Add other blog details here */}
              </Link>
              ))}
          </div>
        </WrapperCard>
      </div>
    </>
  );
}

export default AllBlogs;

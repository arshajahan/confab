import React from 'react';
import WrapperCard from './UI/WrapperCard';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import Slider from 'react-slick';

// Import your blog images
import blog1 from '../assets/images/blog1.jpeg';
import blog2 from '../assets/images/blog2.jpg';
import blog3 from '../assets/images/blog3.png';
import blog4 from '../assets/images/blog4.jpeg';

function LatestBlogs() {
  const blogs = [
    {
      id: 0,
      image: blog1,
      title: 'Exploring the Depths of STEM Workforce Management',
      content: 'Learn about the latest advancements in STEM workforce management strategies.',
    },
    {
      id: 1,
      image: blog2,
      title: 'Offshore Platforms: A Project Springboard for Crewing Management',
      content: 'Discover how offshore platforms serve as a crucial project springboard in crewing management.',
    },
    {
      id: 2,
      image: blog3,
      title: 'Reducing Environmental Impact in Project Management',
      content: 'Explore the objective of minimizing environmental impact in project management.',
    },
    {
      id: 3,
      image: blog4,
      title: 'Innovations in Staffing and Workforce Management',
      content: 'Stay updated on the latest innovations in staffing and workforce management.',
    },
    {
      id: 4,
      image: blog2,
      title: 'Effective Project Management Strategies for Success',
      content: 'Learn about effective project management strategies to ensure project success.',
    },
  ];

  // Settings for the react-slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <FaChevronCircleRight className="text-2xl text-blue-900" />,
    prevArrow: <FaChevronCircleLeft className="text-2xl text-blue-900" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='bg-gray-100'>
      <WrapperCard className='py-14'>
        <h2 className='text-blue-900 font-bold text-4xl text-center'>Our Latest Blogs</h2>
        <div className='mt-12'>
          <Slider {...sliderSettings} className=" flex gap-6 h-max">
            {blogs.map((blog) => (
              <div key={blog.id} className='shadow-md h-full'> {/* Added mb-4 for margin-bottom */}
                <img src={blog.image} className='h-60 3xl:h-72 w-full mb-4' alt='' />
                <div className=' text-center'>
                  <div className='text-left flex flex-col gap-4 pr-4'>
                    <h2 className='text-2xl font-bold mb-2 overflow-hidden max-h-16'>
                      {blog.title}
                    </h2>
                    <p className=''>{blog.content}</p>
                  </div>
                  <span className='text-blue-900 font-semibold flex items-center mt-4'>
                    <FaChevronCircleRight className='mr-2 text-xl' />
                    Read more
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </WrapperCard>
    </div>
  );
}

export default LatestBlogs;
import React from 'react';
import WrapperCard from './UI/WrapperCard';
import Slider from 'react-slick';
import { Blogs } from '../assets/constants';
import { Link } from 'react-router-dom';

function LatestBlogs() {
    

  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: (
        <div className=''>
          <div className=" hidden lg:block next-slick-arrow"> ⫸ </div>
        </div>
      ),
      prevArrow: (
        <div className='hidden lg:block '>
          <div className="hidden lg:block  prev-slick-arrow"> ⫷ </div>
        </div>
      ),
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
          slidesToShow: 3,
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
      <WrapperCard className='py-10'>
        <h2 className='text-main font-bold text-4xl text-center'>Our Latest Blogs</h2>
        <div className="slider-content mt-12">
            <div className="slider-container">
                <Slider {...settings} >
                {Blogs.map((item) => (
                    <div key={item.id} className='relative h-[540px]'>
                        <img src={item.src} alt={item.alt} className="slider-img shadow-lg object-cover" />
                        <div className='  shadow-md mx-2 h-[250px]'>
                            {/* <span className=' absolute left-3 text-xs'>{item.date}</span> */}
                            <h2 className=" text-xs pt-4 pl-3">{item.date}</h2>
                            <p className="slider-description">{item.title}</p>
                            <Link 
                                onClick={() => {
                                  window.scrollTo({
                                      top: 0,
                                      behavior: 'smooth',
                                  });
                                }} 

                                to={`/blog/${item.path}`}

                                className=' absolute bottom-5 text-white py-1 px-2 ml-[10px] text-sm bg-main '
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                    
                ))}
                </Slider>
            </div>
        </div>
        <div className='flex justify-center mt-8'>
          <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to='/blogs' id='solutions' className='bg-main text-white z-10 px-4 py-2 '>
            View All
          </Link>
        </div>
      </WrapperCard>
    </div>
  );
}

export default LatestBlogs;

import React, { useEffect, useState } from 'react';
import WrapperCard from './UI/WrapperCard';
import videoSrc from '../assets/videos/banvid.webm';
import subImg from '../assets/images/image1.webp';
import image2 from '../assets/images/image5.webp';
import image1 from '../assets/images/image2.webp';
import image3 from '../assets/images/image4.webp';
import diversity from '../assets/images/diversity.jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// const images = [videoSrc, image1, image2, image3];
const images = [image1, subImg, diversity, image3];

const content = [
  {
    title: 'Confab',
    description: 'Engineering Driven Staffing for a sustainable future.',
    buttonText: 'Discover Confab',
    to: '/about-us',
    type: 'page'
  },
  {
    title: 'Discover how we generate shared value',
    description: "Discover Confab's solutions",
    buttonText: 'Discover Our Solutions',
    to: '/#solutions',
    type: 'hash'
  },
  {
    title: 'Diversity, Equity, Inclusion',
    description: 'Explore our commitment to diversity, equity, and inclusion.',
    buttonText: 'Discover More',
    to: '/diversity',
    type: 'page'
  },
  {
    title: 'Media',
    description: 'Read our blogs and press releases',
    buttonText: 'Explore',
    to: '/contact-us',
    type: 'page'
  },
];

function Banner() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage === images.length - 1 ? 0 : prevPage + 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? images.length - 1 : prevPage - 1));
  };

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  useEffect(() => {
    // Automatically move to the next slide after 5000ms
    const autoMoveInterval = setInterval(() => {
      handleNext();
    }, 5000);
  
    // Clear the interval when the component unmounts
    return () => clearInterval(autoMoveInterval);
  }, [currentPage]);

 
  return (
    <div className='relative'>
      {/* <Navbar /> */}
      <div className=' relative h-screen flex items-center'>
        {currentPage === 0 ? (
            // <video
            //     className='absolute top-0 left-0 w-full h-full object-cover z-0'
            //     autoPlay
            //     muted
            //     loop
            //     playsInline  // Adding playsInline can also help on iOS Safari
            // >
            //       <source src={images[currentPage]} type='video/mp4' />
            //       Your browser does not support the video tag.
            // </video>
            <img
            className='absolute top-0 left-0 w-full h-full object-cover z-0'
            src={image1}
            alt={`Slide ${currentPage}`}
          />
        
        ) : (
          <img
            className='absolute top-0 left-0 w-full h-full object-cover z-0'
            src={images[currentPage]}
            alt={`Slide ${currentPage}`}
          />
        )}
        <WrapperCard className='banner flex items-center z-auto '>
          <div className='grid gap-10 py-4'>
            <h1 className=' text-4xl lg:text-6xl w-11/12 text-white font-semibold'>{content[currentPage].title}</h1>
            <p className=' text-lg lg:text-xl font-bold text-white'>{content[currentPage].description}</p>
            <div className='flex mt-4'>
              <Link to={content[currentPage].to} className={` ${content[currentPage].type === 'hash' ? 'hidden' : '' } bg-white text-main font-semibold px-6 py-3`}>
                {content[currentPage].buttonText}
              </Link>
              <HashLink to={content[currentPage].to} className={` ${content[currentPage].type === 'page' ? 'hidden' : '' } bg-white text-main font-semibold px-6 py-3`}>
                {content[currentPage].buttonText}
              </HashLink>
            </div>
          </div>
        </WrapperCard>
      </div>

      <WrapperCard className='banner relative'>
        <div className='absolute bottom-10 flex space-x-6'>
            {images.map((_, index) => (
            <button
                key={index}
                onClick={() => handlePageClick(index)}
                className={`${
                currentPage === index ? 'bg-white border-black text-gray-700' : 'text-white bg-transparent border-2 border-white'
                } rounded-full w-12 h-12 flex items-center justify-center`}
            >
                {index + 1}
            </button>
            ))}
        </div>

        <div className=' banner hidden absolute bottom-10 right-4 lg:flex space-x-4'>
            <button onClick={handlePrev} className='bg-transparent border-2 border-white text-white px-6 py-4 rounded-full'>
            {'<'}
            </button>
            <button onClick={handleNext} className='bg-transparent border-2 border-white text-white px-6 py-4 rounded-full'>
            {'>'}
            </button>
        </div>
     </WrapperCard>

    </div>
  );
}

export default Banner;

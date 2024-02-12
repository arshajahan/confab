import React from 'react';
import WrapperCard from './UI/WrapperCard';
import diversity from '../assets/images/diversity.webp';
import dots from '../assets/images/dots.svg';
import { FaChevronCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Diversity() {

  const menuClicked = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='relative bg-green-100'>
      {/* For screen sizes above 'lg' */}
      <WrapperCard className='hidden lg:block relative mx-20 pb-14'>
        <div className='flex'>
          <div
            className='w-1/2 grid gap-6 bg-[#db7c00] px-12 py-8 text-white'
            style={{
              backgroundImage: `url(${dots})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className='font-semibold'>PEOPLE</span>
            <h2 className=' text-4xl font-bold'>Diversity & Inclusion</h2>
            <p className='text-lg mt-3'>
            Confab believes in people's value, backgrounds, their leadership styles and conduct, because each individual has the potential to generate value for our company.
            </p>
            <Link to='/diversity' onClick={() => menuClicked()} className='font-semibold flex items-center mt-12'>
              <FaChevronCircleRight className='mr-2 text-xl text-main' />
              DISCOVER MORE
            </Link>
          </div>
          <img
            height={100} width={100}
            loading='auto'
            title='Diversity at Confab International'
            className='w-1/2  h-[500px] object-cover z-0'
            src={diversity}
            alt='Diversity'
          />
        </div>
      </WrapperCard>
      {/* For screen sizes below 'lg' */}
      <div className='lg:hidden flex-col'>
      <div
          className='bg-[#db7c00] grid gap-6 px-6 py-10 text-white '
          style={{
            backgroundImage: `url(${dots})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        > 
          <span className='block font-semibold'>PEOPLE</span>
          <h2 className='text-2xl font-bold'>Diversity & Inclusion</h2>
          <p className='text-base mt-3'>
            Confab believes in people's value, backgrounds, their leadership styles and conduct, because each individual has the potential to generate value for our company.
          </p>
          <Link to='/diversity' onClick={() => menuClicked()} className='font-semibold flex items-center mt-6'>
            <FaChevronCircleRight className='mr-2 text-xl' />
            DISCOVER MORE
          </Link>
        </div>
        <img
          height={100} width={100}
          loading='auto'
          title='Diversity at Confab International'
          className='w-full h-auto object-cover z-0'
          src={diversity}
          alt='Diversity'
        />
      </div>
      <span id='blogs'></span>
    </div>
  );
}

export default Diversity;

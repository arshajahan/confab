import React from 'react';
import WrapperCard from './UI/WrapperCard';
import diversity from '../assets/images/diversity.jpg';
import dots from '../assets/images/dots.svg';
import { FaChevronCircleRight } from 'react-icons/fa';

function Diversity() {
  return (
    <div className='relative'>
      {/* For screen sizes above 'lg' */}
      <WrapperCard className='hidden lg:block relative mx-20 my-8'>
        <div className='flex'>
          <img
            className='w-1/2  h-[500px] object-cover z-0'
            src={diversity}
            alt='Diversity'
          />
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
              Our commitment is to generate sustainable value for all our stakeholders, integrating environmental, social, and governance
            </p>
            <span className='font-semibold flex items-center mt-12'>
              <FaChevronCircleRight className='mr-2 text-xl text-main' />
              DISCOVER MORE
            </span>
          </div>
        </div>
      </WrapperCard>
      {/* For screen sizes below 'lg' */}
      <div className='lg:hidden flex-col'>
      <div
          className='bg-[#db7c00] grid gap-6 px-6 py-10 text-white mt-4'
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
          <span className='font-semibold flex items-center mt-6'>
            <FaChevronCircleRight className='mr-2 text-xl' />
            DISCOVER MORE
          </span>
        </div>
        <img
          className='w-full h-auto object-cover z-0'
          src={diversity}
          alt='Diversity'
        />
      </div>
    </div>
  );
}

export default Diversity;

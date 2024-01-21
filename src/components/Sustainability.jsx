import React from 'react';
import WrapperCard from './UI/WrapperCard';
import sustainability from '../assets/images/sustainability.jpg';
import dots from '../assets/images/dots.svg';
import { FaChevronCircleRight } from 'react-icons/fa';

function Sustainability() {
  return (
    <div className='relative '>
      {/* For screen sizes above 'md' */}
      <WrapperCard className='hidden lg:block relative mx-20 my-8'>
        <div className='flex'>
          <img
            className='w-1/2 h-[500px] object-cover z-0 shadow-xl'
            src={sustainability}
            alt='Sustainability'
          />
          <div
            className='w-1/2 grid gap-6 bg-[#628e9e] px-12 py-8 text-white'
            style={{
              backgroundImage: `url(${dots})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span className='font-semibold'>SUSTAINABILITY</span>
            <h2 className=' text-4xl font-bold'>Sustainability</h2>
            <p className='text-lg mt-3'>
              Our commitment is to generate sustainable value for all our stakeholders, integrating environmental, social, and governance
            </p>
            <span className='font-semibold flex items-center mt-12'>
              <FaChevronCircleRight className='mr-2 text-xl text-[#2b495a]' />
              DISCOVER MORE
            </span>
          </div>
        </div>
      </WrapperCard>
      {/* For screen sizes below 'lg' */}
      <div className='lg:hidden my-8 flex-col'>
        <img
          className='w-full h-auto object-cover z-0'
          src={sustainability}
          alt='Sustainability'
        />
        <div
          className='bg-[#628e9e] grid gap-6 px-6 py-10 text-white mt-4'
          style={{
            backgroundImage: `url(${dots})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <span className='block font-semibold'>SUSTAINABILITY</span>
          <h2 className='text-xl font-bold'>Sustainability</h2>
          <p className='text-base mt-3'>
            Our commitment is to generate sustainable value for all our stakeholders, integrating environmental, social, and governance
          </p>
          <span className='font-semibold flex items-center mt-6'>
            <FaChevronCircleRight className='mr-2 text-xl ' />
            DISCOVER MORE
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sustainability;

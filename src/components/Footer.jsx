import React from 'react';
import WrapperCard from './UI/WrapperCard';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import logo from '../assets/images/logo.png';

function Footer() {
  return (
    <div className='bg-[#628e9e] py-16 text-white overflow-hidden'>
      <WrapperCard className='flex flex-col lg:flex-row justify-between w-full '>
        <div className='flex flex-col lg:flex-row items-left lg:items-start gap-5 lg:basis-1/4'>
          <img src={logo} className='w-32' alt='confab'/>
          <div className='flex text-3xl lg:gap-3 mt-3 lg:mt-0'>
            <AiFillLinkedin/>
            <AiFillInstagram/>
            <AiFillFacebook/>
          </div>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-gray-300 text-sm'>DISCOVER CONFAB</span>
          <ul className='flex flex-col gap-5 mt-2 lg:mt-4'>
            <li>About us</li>
            <li>Sectors</li>
            <li>Solutions</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-gray-300 text-sm'>OTHER LINKS</span>
          <ul className='flex flex-col gap-5 mt-2 lg:mt-4'>
            <li>Media</li>
            <li>People</li>
            <li>Locations & Contacts</li>
          </ul>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-gray-200'>CAREERS</span>
        </div>
      </WrapperCard>
      <WrapperCard className='mt-9'>
        <span className='text-xs'>Copyright 2023 Saipem - All right reserved</span>
        <br/><hr/>
      </WrapperCard>
    </div>
  );
}

export default Footer;

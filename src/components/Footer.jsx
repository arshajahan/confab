import React from 'react';
import WrapperCard from './UI/WrapperCard';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import logo from '../assets/images/logo.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer() {

  const menuClicked = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='footer' className='bg-[#628e9e] py-16 text-white overflow-hidden'>
      <WrapperCard className='flex flex-col lg:flex-row justify-between w-full '>
        <div className='flex flex-col items-left  gap-5 lg:basis-1/4'>
          <Link to='/confab' onClick={() => menuClicked()}>
            <img src={logo} className='w-32' alt='confab'/>
          </Link>
          <div className='flex text-3xl lg:gap-3 mt-3 lg:mt-0'>
            <AiFillLinkedin/>
            <AiFillInstagram/>
            <AiFillFacebook/>
          </div>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-gray-300 text-sm'>DISCOVER CONFAB</span>
          <ul className='flex flex-col gap-5 mt-2 lg:mt-4'>
            <Link onClick={() => menuClicked()} to='/about-us'>About us</Link>
            <HashLink to='/#sectors'>Sectors</HashLink>
            <HashLink to='/#solutions'>Solutions</HashLink>
            <Link onClick={() => menuClicked()} to='/sustainability'>Sustainability</Link>
          </ul>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-gray-300 text-sm'>OTHER LINKS</span>
          <ul className='flex flex-col gap-5 mt-2 lg:mt-4'>
            <li>Media</li>
            <Link onClick={() => menuClicked()} to='/diversity'>People</Link>
            <Link onClick={() => menuClicked()} to='/contact-us'>Contact us</Link>
          </ul>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-gray-200'>CAREERS</span>
        </div>
      </WrapperCard>
      <WrapperCard className='mt-9'>
        <span className='text-xs'>Copyright 2024 Confab - All right reserved</span>
        <br/><hr/>
      </WrapperCard>
    </div>
  );
}

export default Footer;

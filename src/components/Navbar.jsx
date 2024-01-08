import React, { useEffect, useState } from 'react';
import WrapperCard from './UI/WrapperCard';
import logo from '../assets/images/logo.png';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Navbar() {

    const [showFirstNavbar, setShowFirstNavbar] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Check the scroll position to determine when to switch navbars
        if (scrollPosition > 100) {
            setShowFirstNavbar(false);
        } else {
            setShowFirstNavbar(true);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>    
    {showFirstNavbar && (
    <div className=' fixed top-0 w-full z-10'>
      <div className='bg-transparent'>
        <WrapperCard className='flex text-white justify-between gap-4 py-3 text-sm'>
          <div className='flex gap-6 font-bold'>
            <span className=''>MEDIA</span>
            <span className=''>PEOPLE</span>
            <span className=''>LOCATION & CONTACTS</span>
          </div>
          <div className='flex gap-3'>
            <AiFillLinkedin size={25} />
            <AiFillInstagram size={25} />
          </div>
        </WrapperCard>
      </div>
      <hr/>
      <WrapperCard className='flex justify-between items-center h-[5em] py-6 bg-transparent'>
        <div className='basis-1/6 items-center'>
          <img src={logo} alt='Logo' className='h-14' />
        </div>
        <div className='flex justify-between my-auto items-center basis-4/6 text-white font-semibold'>
          <span className=''>WHO WE ARE</span>
          <span className=''>SOLUTIONS</span>
          <span className=''>SECTORS</span>
          <span className=''>SERVICES</span>
          <span className=''>SUSTAINABILITY</span>
        </div>
      </WrapperCard>
    </div>
    )}

    {!showFirstNavbar && (
    <div className='fixed top-0 w-full z-30 bg-white'>
        <WrapperCard className='flex justify-between items-center h-[5em] py-6'>
        <div className='flex items-center'>
            <img src={logo} alt='Logo' className='h-10 lg:h-14' />
        </div>
        <div className=' basis-10/12 flex justify-between text-xs lg:text-base items-center w-full text-blue-900 lg:font-bold'>
            <span className='mx-4'>Media</span>
            <span className='mx-4'>People</span>
            <span className='mx-4'>Locations & Contacts</span>
            <span className='mx-4'>Who We Are</span>
            <span className='mx-4'>Solutions</span>
            <span className='mx-4'>Sectors</span>
            <span className='mx-4'>Services</span>
            <span className='mx-4'>Sustainability</span>
        </div>
        </WrapperCard>
    </div>
    )}
  </>
  );
}

export default Navbar;

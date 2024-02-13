import React from 'react';
import WrapperCard from './UI/WrapperCard';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import logo from '../assets/images/whitelogo.webp';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Footer() {

  const menuClicked = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id='footer' className='bg-main py-14 text-white overflow-hidden'>
      <WrapperCard className='flex flex-col lg:flex-row justify-between w-full '>
        <div className='flex flex-col items-left  gap-5 lg:basis-1/4'>
          <Link to='/' onClick={() => menuClicked()}>
            <img height={100} width={100} loading='lazy' title='Confab International' src={logo} className='w-32' alt='confab logo'/>
          </Link>
          <div className='ml-1 flex text-3xl lg:gap-3 mt-3 lg:mt-0'>
            <a href='https://www.linkedin.com/company/confab-international-llc' target="_blank" rel="noopener noreferrer" >
              <AiFillLinkedin />
            </a>
            <a href='https://www.instagram.com/confabint/' target="_blank" rel="noopener noreferrer" >
              <AiFillInstagram/>  
            </a>
            {/* <a href='https://www.linkedin.com/company/confab-international-llc' target="_blank" rel="noopener noreferrer" >
              <AiFillFacebook/>
            </a> */}
          </div>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-white font-semibold'>DISCOVER CONFAB</span>
          <div className='flex flex-col gap-5 mt-2 lg:mt-4'>
            <Link onClick={() => menuClicked()} to='/about-us'>About us</Link>
            <Link onClick={() => menuClicked()} to='/sectors/Infrastructure'>Sectors</Link>
            <HashLink to='/#solutions'>Solutions</HashLink>
            <Link onClick={() => menuClicked()} to='/sustainability'>Sustainability</Link>
          </div>
        </div>
        <div className='mt-6 lg:mt-0 lg:basis-1/4'>
          <span className='text-white font-semibold'>OTHER LINKS</span>
          <div className='flex flex-col gap-5 mt-2 lg:mt-4'>
            <Link onClick={() => menuClicked()} to='/blogs'>Media</Link>
            <Link onClick={() => menuClicked()} to='/diversity'>People</Link>
            <Link onClick={() => menuClicked()} to='/contact-us'>Contact us</Link>
          </div>
        </div>
        <div className='mt-6 lg:mt-10 lg:basis-1/4 text-sm'>
          <Link to='/careers' onClick={() => menuClicked()} className=''>CAREERS</Link>
          <div className='flex flex-col gap-5 mt-6 lg:mt-4'>
            <span className=' lg:hidden flex flex-col gap-7'>
                <Link onClick={() => menuClicked()} to='/privacy'>Privacy</Link>
                <Link onClick={() => menuClicked()} to='/terms'>Terms & Conditions</Link>
                <Link onClick={() => menuClicked()} to='/security-phishing'>Security & Phishing</Link>
            </span>
          </div>
        </div>
      </WrapperCard>
      <WrapperCard className='mt-9 text-xs'>
        <div className=' flex justify-between'>
          <span className=''>Copyright 2024 Confab - All right reserved</span>
          <div className=' hidden lg:flex gap-7 text-sm'>
            <Link onClick={() => menuClicked()} to='/privacy'>Privacy</Link>
            <Link onClick={() => menuClicked()} to='/terms'>Terms & Conditions</Link>
            <Link onClick={() => menuClicked()} to='/security-phishing'>Security & Phishing</Link>
          </div>
        </div>
        <br/><hr/><br/>
        <div className=' flex flex-col gap-3 text-center'>
          <p className=' text-white font-semibold text-base'>Confab International</p>
          <span className=''>Head Office: Block 7, Street 400, East Al-Ahmadi - 64018, Ahmadi, Kuwait.</span>
        </div>
      </WrapperCard>
    </div>
  );
}

export default Footer;

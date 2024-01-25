import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillInstagram, AiFillLinkedin, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { services } from '../assets/constants';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import whitelogo from '../assets/images/whitelogo.png';
import WrapperCard from './UI/WrapperCard';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const location = useLocation();
  const isAboutUsPage = location.pathname !== '/confab' && location.pathname !== '/' && location.pathname !== '/confab/';

  const [showFirstNavbar, setShowFirstNavbar] = useState(true);
  const [isNavClicked, setNavClicked] = useState(false);
  const [collapsed, setCollapsed] = useState(null);

  const toggle = (i) => setCollapsed((prev) => (prev === i ? null : i));

  const navToggle = () => {
    setNavClicked((prev) => !prev);
    document.body.style.overflow = isNavClicked ? 'auto' : 'hidden';
    if (!isNavClicked) setTimeout(() => window.scrollTo({ top: 0 }), 0);
  };

  const navRef = useRef(null);

  useEffect(() => {
    const handleNavAnimation = () => {
      navRef.current.style.height = isNavClicked ? '100vh' : '0';
      if (!isNavClicked) document.body.style.overflow = 'auto';
    };

    handleNavAnimation();
  }, [isNavClicked]);

  const handleScroll = () => setShowFirstNavbar(window.scrollY <= 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuClicked = () => {
    if (isNavClicked) navToggle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showFirstNavbar && !isNavClicked && (
        <div className={` absolute top-0 w-full z-10 ${isAboutUsPage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <div className={``}>
            <WrapperCard className={`hidden lg:flex ${isAboutUsPage ? 'text-main' : 'text-white'} justify-between gap-4 py-3 text-md`}>
              <div className='flex gap-6 font-semibold'>
                <span className=' cursor-pointer hover:text-main hover:bg-white p-2'>Media</span>
                <Link onClick={() => menuClicked()} to='/diversity' className=' cursor-pointer hover:text-main hover:bg-white p-2'>People</Link>
                <Link onClick={() => menuClicked()} to='/contact-us' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Contact us</Link>
              </div>
              <div className='flex gap-3'>
                <a href='https://www.linkedin.com/company/confab-international-llc' target="_blank" rel="noopener noreferrer" >
                  <AiFillLinkedin size={25}/>
                </a>
                <a href='https://www.instagram.com/confabint/' target="_blank" rel="noopener noreferrer" >
                  <AiFillInstagram size={25}/>  
                </a>
              </div>
            </WrapperCard>
          </div>
          <hr className='hidden lg:block' />
          <WrapperCard className={`flex ${isAboutUsPage ? 'text-main' : 'text-white'} justify-between items-center h-[5em] py-6 bg-transparent`}>
            <Link onClick={() => menuClicked()} to="/confab" className='flex items-center'>
              <img src={isAboutUsPage ? logo : whitelogo} alt='Logo' className={` ${isAboutUsPage ? 'h-10 md:h-14' : 'h-20 md:h-24'}`} />
            </Link>
            <div className={`hidden lg:flex text-lg justify-between my-auto items-center basis-3/6  font-medium`}>
              <Link onClick={() => menuClicked()} to='/about-us' className=' cursor-pointer hover:text-main hover:bg-white p-2'>About us</Link>
              <HashLink to='/#solutions' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Solutions</HashLink>
              <HashLink to='/#sectors' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Sectors</HashLink>
              <Link onClick={() => menuClicked()} to='/sustainability' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Sustainability</Link>
              <HashLink to='/#footer' className=' cursor-pointer text-2xl'><AiOutlineSearch /></HashLink>
            </div>
            <div className='lg:hidden flex gap-6 text-xl '>
              <HashLink to='/#footer' className=' cursor-pointer text-2xl'><AiOutlineSearch /></HashLink>
              <GiHamburgerMenu className='cursor-pointer' onClick={() => navToggle()} />
            </div>
          </WrapperCard>
        </div>
      )}

      {!showFirstNavbar && !isNavClicked && (
        <div className='fixed top-0 w-full z-30 bg-white'>
          <WrapperCard className='flex justify-between items-center h-[5em] py-6'>
            <Link onClick={() => menuClicked()} to='/confab' className='flex items-center'>
              <img src={logo} alt='Logo' className='h-10 md:h-14' />
            </Link>
            <div className=' basis-10/12 hidden lg:flex justify-between text-xs lg:text-base items-center w-full text-main lg:font-semibold'>
              <span className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Media</span>
              <Link onClick={() => menuClicked()} to='/diversity' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>People</Link>
              <Link onClick={() => menuClicked()} to='/contact-us' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Contact us</Link>
              <Link onClick={() => menuClicked()} to='/about-us' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>About Us</Link>
              <HashLink to='/#solutions' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Solutions</HashLink>
              <HashLink to='/#sectors' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Sectors</HashLink>
              <HashLink to='/#footer' className=' cursor-pointer text-2xl'><AiOutlineSearch /></HashLink>
            </div>
            <div className='lg:hidden flex gap-6 text-xl text-main'>
              <span className=' text-2xl'><AiOutlineSearch /></span>
              <GiHamburgerMenu className=' cursor-pointer' onClick={() => navToggle()} />
            </div>
          </WrapperCard>
        </div>
      )}

      <div
        ref={navRef}
        className="z-20 lg:hidden bg-white transition-height duration-300"
        style={{ height: isNavClicked ? '100vh' : '0', width: '100%' }}
      >
        {isNavClicked && (
          <WrapperCard className='relative'>
            {/* Mobile close button */}
            <div className=" flex justify-between items-center cursor-pointer pt-4">
              <div>
                <img src={logo} alt='Logo' className='h-10 md:h-14' />
              </div>
              <AiOutlineClose onClick={navToggle} className='cursor-pointer text-main' size={20} />
            </div>

            {/* Mobile navigation as */}
            <div className="mt-10">
              {services.map((item, i) => (
                <div className="mt-4 " key={item.id}>
                  <button
                    className={`relative w-full py-2 px-2 text-left text-lg hover:bg-main hover:text-white  ${collapsed === i ? 'bg-main text-white' : ''}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="absolute inset-y-0 right-2 flex items-center">{collapsed === i ? '^' : '>'}</span>
                    {item.question}
                  </button>


                  <div
                    className="overflow-hidden transition-all duration-700 ease-in-out"
                    style={{ maxHeight: collapsed === i ? '100vh' : '0', opacity: collapsed === i ? 1 : 0 }}
                  >
                    {collapsed === i && (
                      <div>
                        {item.answer.map((answer, j) => (
                          <a
                            to={`/service/${item.path+':'+answer.split(" ")[0]}`}
                            key={j}
                            className="block py-2 px-6 text-main "
                          
                          >
                            {answer}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <br/>
            <hr/>

            {/* Additional mobile as */}
            <div className="absolute left-0 w-full">
              <ul className=" px-2 mt-16 mb-8 text-main">
                <li className="mb-4">
                  <Link onClick={() => menuClicked()} to="/#contact-us">Media</Link>
                </li>
                <li className="mb-4">
                  <Link onClick={() => menuClicked()} to="/diversity">People</Link>
                </li>
                <li className="mb-4">
                  <Link onClick={() => menuClicked()} to="/sustainability">Sustainability</Link>
                </li>
                <li className="mb-4">
                  <Link onClick={() => menuClicked()} to="/contact-us">Contact us</Link>
                </li>
                {/* Add other mobile navigation as */}
              </ul>
            </div>
          </WrapperCard>
        )}
      </div>
    </>
  );
};

export default Navbar;

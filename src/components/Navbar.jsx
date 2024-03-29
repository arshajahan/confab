import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillInstagram, AiFillLinkedin, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import whitelogo from '../assets/images/whitelogo.webp';
import WrapperCard from './UI/WrapperCard';
import { HashLink } from 'react-router-hash-link';
import { services } from '../assets/constants'

const Navbar = () => {
  const location = useLocation();
  const isAboutUsPage = location.pathname !== '/confab' && location.pathname !== '/' && location.pathname !== '/confab/';

  const [showFirstNavbar, setShowFirstNavbar] = useState(true);
  const [isNavClicked, setNavClicked] = useState(false);
  const [isSectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);

  const navToggle = () => {
    setNavClicked((prev) => !prev);
    if (!isNavClicked) setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.style.overflow = isNavClicked ? 'auto' : 'hidden';
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
    if (!isNavClicked) setTimeout(() => window.scrollTo({ top: 0})); 
    if (isNavClicked) navToggle();
  };

  const hamburgerClicked = () => {
    navToggle();
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }),100);
    
  };

  const handleSectorsDropdownEnter = () => {
    setSectorsDropdownOpen(true);
  };

  const handleSectorsDropdownLeave = () => {
    setSectorsDropdownOpen(false);
  };


  return (
    <>
      {showFirstNavbar && !isNavClicked && (
        <div className={` absolute top-0 w-full z-30 ${isAboutUsPage ? 'bg-white shadow-md' : 'bg-transparent'}`}>
          <div className={``}>
            <WrapperCard className={`hidden lg:flex ${isAboutUsPage ? 'text-main' : 'text-white'} justify-between gap-4 py-3 text-md`}>
              <div className='flex gap-6 font-semibold'>
                <Link onClick={menuClicked}  to='/blogs' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Media</Link>
                <Link onClick={menuClicked} to='/diversity' className=' cursor-pointer hover:text-main hover:bg-white p-2'>People</Link>
                <Link onClick={menuClicked} to='/contact-us' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Contact us</Link>
              </div>
              <div className='flex gap-3'>
                <a href='https://www.linkedin.com/company/confab-international-llc' target="_blank" rel="noopener noreferrer" >
                  <AiFillLinkedin size={25} />
                </a>
                <a href='https://www.instagram.com/confabint/' target="_blank" rel="noopener noreferrer" >
                  <AiFillInstagram size={25} />
                </a>
              </div>
            </WrapperCard>
          </div>
          <hr className='hidden lg:block' />
          <WrapperCard className={`  flex ${isAboutUsPage ? 'text-main' : 'text-white'} justify-between items-center h-[5em] py-6 bg-transparent`}>
            <Link onClick={menuClicked} to="/" className='flex items-center'>
              <img height={100} width={100} loading='eager' title='Confab International' src={isAboutUsPage ? logo : whitelogo} alt='Confab Logo' className={` ${isAboutUsPage ? 'w-28' : 'w-32'}`} />
            </Link>
            <div className={`hidden lg:flex text-lg justify-between my-auto items-center basis-3/6  font-medium`}>
              <Link onClick={menuClicked} to='/about-us' className=' cursor-pointer hover:text-main hover:bg-white p-2'>About us</Link>
              <HashLink to='/#solutions' onClick={menuClicked} className=' cursor-pointer hover:text-main hover:bg-white p-2'>Solutions</HashLink>
              <div
                className="relative group "
                onMouseEnter={handleSectorsDropdownEnter}
                onMouseLeave={handleSectorsDropdownLeave}
              >
                <Link to='/sectors/Infrastructure' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Sectors</Link>
                {isSectorsDropdownOpen && (
                  <ul 
                  className="  absolute hidden mt-2 space-y-2 bg-white border border-gray-200 text-main group-hover:block">
                    {services[2].sub.map((sector, i) => (
                      <li key={i}>
                        <Link  to={`/sectors/${sector.split(' & ').join('')}`} onClick={menuClicked} className=' text-sm w-auto block py-2 px-2 hover:bg-main hover:text-white'>
                          {sector}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <Link onClick={menuClicked} to='/sustainability' className=' cursor-pointer hover:text-main hover:bg-white p-2'>Sustainability</Link>
              <HashLink to='/#footer' className=' cursor-pointer text-2xl'>
                <span className="sr-only">Search</span>
                <AiOutlineSearch />
              </HashLink>
            </div>
            <div className='lg:hidden flex gap-6 text-xl '>
              <HashLink to='/#footer' className=' cursor-pointer text-2xl'>
                <span className="sr-only">Search</span>
                <AiOutlineSearch />
              </HashLink>
              <GiHamburgerMenu className='cursor-pointer' onClick={hamburgerClicked} />
            </div>
          </WrapperCard>
        </div>
      )}

      {!showFirstNavbar && !isNavClicked && (
        <div className='fixed top-0 w-full z-30 bg-white'>
          <WrapperCard className='flex justify-between items-center h-[5em] py-6'>
            <Link onClick={menuClicked} to='/' className='flex items-center'>
            <img
              loading='eager'
              title='Confab International'
              src={logo}
              alt='Confab Logo'
              className='w-28'
              width={100}
              height={100}
            />
            </Link>
            <div className=' basis-10/12 hidden lg:flex justify-between text-xs lg:text-base items-center w-full text-main lg:font-semibold'>
              <Link onClick={menuClicked} to='/blogs' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Media</Link>
              <Link onClick={menuClicked} to='/diversity' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>People</Link>
              <Link onClick={menuClicked} to='/contact-us' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Contact us</Link>
              <Link onClick={menuClicked} to='/about-us' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>About Us</Link>
              <HashLink to='/#solutions' onClick={menuClicked} className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Solutions</HashLink>
              <div
                className="relative group"
                onMouseEnter={handleSectorsDropdownEnter}
                onMouseLeave={handleSectorsDropdownLeave}
              >
                <Link to='/sectors/Infrastructure' className='mx-4 cursor-pointer hover:text-white hover:bg-main p-2'>Sectors</Link>
                {isSectorsDropdownOpen && (
                  <ul className="absolute hidden mt-2 space-y-2 bg-white border border-gray-200 text-main group-hover:block">
                    {services[2].sub.map((sector, i) => (
                      <li key={i}>
                        <Link  to={`/sectors/${sector.split(' & ').join('')}`} onClick={() => {menuClicked();handleSectorsDropdownLeave();}} className=' text-sm block py-2 px-4 hover:bg-main hover:text-white'>
                          {sector}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <HashLink to='/#footer' className='mx-4 cursor-pointer text-2xl'>
                <span className="sr-only">Search</span>
                <AiOutlineSearch />
              </HashLink>
            </div>
            <div className='lg:hidden flex gap-6 text-xl text-main'>
              <HashLink to='/#footer' className=' text-2xl'>
                <span className="sr-only">Search</span>
                <AiOutlineSearch />
              </HashLink>
              <GiHamburgerMenu className=' cursor-pointer' onClick={hamburgerClicked} />
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
                <img height={100} width={100} loading='eager' title='Confab International' src={logo} alt='Confab Logo' className='h-10 md:h-14 z-20' />
              </div>
              <AiOutlineClose onClick={navToggle} className='cursor-pointer text-main' size={20} />
            </div>

            {/* Mobile navigation as */}
            <div className="mt-10">
              {services.map((item, i) => (
                (item.type === 'page') ? (
                  <Link to={item.path} onClick={menuClicked} className="mt-4" key={item.id}>
                    <button
                      className={`relative w-full py-2 px-2 text-left text-lg hover:bg-main hover:text-white`}
                    >
                      {item.question}
                    </button>
                  </Link>
                ) : (
                  <HashLink to={item.path} onClick={menuClicked} className="mt-4" key={item.id}>
                    <button
                      className={`relative w-full py-2 px-2 text-left text-lg hover:bg-main hover:text-white`}
                    >
                      {item.question}
                    </button>
                  </HashLink>
                )
              ))}
           
            </div>

            <br />
            <hr />

            {/* Additional mobile as */}
            <div className="absolute left-0 w-full">
              <ul className=" px-2 mt-16 mb-8 text-main">
                <li className="mb-4">
                  <Link onClick={menuClicked} to="/diversity">People</Link>
                </li>
                <li className="mb-4">
                  <Link onClick={menuClicked} to="/sustainability">Sustainability</Link>
                </li>
                <li className="mb-4">
                  <Link onClick={menuClicked} to="/security-phishing">Security & Phishing</Link>
                </li>
                <li className="mb-4">
                  <Link onClick={menuClicked} to="/contact-us">Contact us</Link>
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

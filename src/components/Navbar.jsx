import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillInstagram, AiFillLinkedin, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { services } from '../assets/constants';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import WrapperCard from './UI/WrapperCard';

const Navbar = () => {
  const location = useLocation();
  const isAboutUsPage = location.pathname === '/about-us';

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

  return (
    <>
      {showFirstNavbar && !isNavClicked && (
        <div className={`absolute top-0 w-full z-10 ${isAboutUsPage ? 'bg-white' : 'bg-transparent'}`}>
          <div className={``}>
            <WrapperCard className={`hidden lg:flex ${isAboutUsPage ? 'text-blue-900' : 'text-white'} justify-between gap-4 py-3 text-md`}>
              <div className='flex gap-6 font-semibold'>
                <span className=' cursor-pointer hover:text-blue-900 hover:bg-white p-2'>Media</span>
                <span className=' cursor-pointer hover:text-blue-900 hover:bg-white p-2'>People</span>
                <span className=' cursor-pointer hover:text-blue-900 hover:bg-white p-2'>Locations & Contacts</span>
              </div>
              <div className='flex gap-3'>
                <AiFillLinkedin className=' cursor-pointer' size={25} />
                <AiFillInstagram className=' cursor-pointer' size={25} />
              </div>
            </WrapperCard>
          </div>
          <hr className='hidden lg:block' />
          <WrapperCard className={`flex ${isAboutUsPage ? 'text-blue-900' : 'text-white'} justify-between items-center h-[5em] py-6 bg-transparent`}>
            <Link to="/confab" className='flex items-center'>
              <img src={logo} alt='Logo' className='h-10 md:h-14' />
            </Link>
            <div className={`hidden lg:flex text-lg justify-between my-auto items-center basis-3/6  font-medium`}>
              <Link to='/about-us' className=' cursor-pointer hover:text-blue-900 hover:bg-white p-2'>About us</Link>
              <span className=' cursor-pointer hover:text-blue-900 hover:bg-white p-2'>Solutions</span>
              <span className=' cursor-pointer hover:text-blue-900 hover:bg-white p-2'>Sectors</span>
              <span className=' cursor-pointer hover:text-blue-900 hover:bg-white p-2'>Sustainability</span>
              <span className=' cursor-pointer text-2xl'><AiOutlineSearch /></span>
            </div>
            <div className='lg:hidden flex gap-6 text-xl '>
              <span className=' cursor-pointer text-2xl'><AiOutlineSearch /></span>
              <GiHamburgerMenu className='cursor-pointer' onClick={() => navToggle()} />
            </div>
          </WrapperCard>
        </div>
      )}

      {!showFirstNavbar && !isNavClicked && (
        <div className='fixed top-0 w-full z-30 bg-white'>
          <WrapperCard className='flex justify-between items-center h-[5em] py-6'>
            <Link to='/confab' className='flex items-center'>
              <img src={logo} alt='Logo' className='h-10 md:h-14' />
            </Link>
            <div className=' basis-10/12 hidden lg:flex justify-between text-xs lg:text-base items-center w-full text-blue-900 lg:font-semibold'>
              <span className='mx-4 cursor-pointer hover:text-white hover:bg-blue-900 p-2'>Media</span>
              <span className='mx-4 cursor-pointer hover:text-white hover:bg-blue-900 p-2'>People</span>
              <span className='mx-4 cursor-pointer hover:text-white hover:bg-blue-900 p-2'>Locations & Contacts</span>
              <Link to='/about-us' className='mx-4 cursor-pointer hover:text-white hover:bg-blue-900 p-2'>About Us</Link>
              <span className='mx-4 cursor-pointer hover:text-white hover:bg-blue-900 p-2'>Solutions</span>
              <span className='mx-4 cursor-pointer hover:text-white hover:bg-blue-900 p-2'>Sectors</span>
              <span className=' cursor-pointer text-2xl'><AiOutlineSearch /></span>
            </div>
            <div className='lg:hidden flex gap-6 text-xl text-blue-900'>
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
                <img src={logo} alt='Logo' onClick={navToggle} className='h-10 md:h-14' />
              </div>
              <AiOutlineClose className='cursor-pointer' size={26} color="blue" onClick={navToggle} />
            </div>

            {/* Mobile navigation as */}
            <div className="mt-10">
              {services.map((item, i) => (
                <div className="mt-4 " key={item.id}>
                  <button
                    className={`relative w-full py-2 px-4 text-left text-lg font-semibold hover:bg-blue-900 hover:text-white  ${collapsed === i ? 'bg-blue-900 text-white' : ''}`}
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
                            className="block py-2 px-8 text-[#2d3540] "
                            onClick={navToggle}
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

            <hr/>

            {/* Additional mobile as */}
            <div className="absolute left-0 w-full">
              <ul className=" px-4 mt-16 mb-8 text-blue-900">
                <li className="mb-4">
                  <a to="/#footer" onClick={navToggle}>Media</a>
                </li>
                <li className="mb-4">
                  <a to="/about" onClick={navToggle}>People</a>
                </li>
                <li className="mb-4">
                  <a to="/sustainability" onClick={navToggle}>Locations & Contacts</a>
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

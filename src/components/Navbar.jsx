import React, { useEffect, useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import WrapperCard from './UI/WrapperCard';
import logo from '../assets/images/logo.png';
import { AiFillInstagram, AiFillLinkedin, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import {services} from '../assets/constants';

function Navbar() {

    const [showFirstNavbar, setShowFirstNavbar] = useState(true);
    const [isNavClicked, setNavClicked] = useState(false);
    const [collapsed, setCollapsed] = useState(null);

    const toggle = (i) => setCollapsed((prev) => (prev === i ? null : i));

    const navToggle = () => {
        setNavClicked((isNavClicked) => !isNavClicked);
        if (!isNavClicked) {
          document.body.style.overflow = 'hidden'; // Prevent scrolling
          setTimeout(() => {
            window.scrollTo({ top: 0 }); // Scroll to top after a short delay
          }, 0); // Adjust the delay as needed
        } else {
          document.body.style.overflow = 'auto'; // Enable scrolling
        }
      };
      
    
      const navRef = useRef(null);
    
      useEffect(() => {
        const handleNavAnimation = () => {
          if (isNavClicked) {
            navRef.current.style.height = '100vh';
          } else {
            navRef.current.style.height = '0';
            document.body.style.overflow = 'auto';
          }
        };
    
        handleNavAnimation();
      }, [isNavClicked]);

    const menuClicked = () => {
        if (isNavClicked) navToggle();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    

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
    {(showFirstNavbar && !isNavClicked) && (
    <div className=' fixed top-0 w-full z-10'>
      <div className='bg-transparent'>
        <WrapperCard className='hidden lg:flex text-white justify-between gap-4 py-3 text-md'>
          <div className='flex gap-6 font-semibold'>
            <span className=' border-b-4 cursor-pointer border-transparent hover:border-orange-700'>Media</span>
            <span className=' border-b-4 cursor-pointer border-transparent hover:border-orange-700'>People</span>
            <span className=' border-b-4 cursor-pointer border-transparent hover:border-orange-700'>Locations & Contacts</span>
          </div>
          <div className='flex gap-3'>
            <AiFillLinkedin size={25} />
            <AiFillInstagram size={25} />
          </div>
        </WrapperCard>
      </div>
      <hr className='hidden lg:block'/>
      <WrapperCard className='flex justify-between items-center h-[5em] py-6 bg-transparent'>
        <div className='flex items-center'>
          <img src={logo} alt='Logo' className='h-10 md:h-14' />
        </div>
        <div className='hidden lg:flex text-lg justify-between my-auto items-center basis-3/6 text-white font-medium'>
          <span className=' border-b-4 cursor-pointer border-transparent hover:border-orange-700'>About us</span>
          <span className=' border-b-4 cursor-pointer border-transparent hover:border-orange-700'>Solutions</span>
          <span className=' border-b-4 cursor-pointer border-transparent hover:border-orange-700'>Sectors</span>
          <span className=' border-b-4 cursor-pointer border-transparent hover:border-orange-700'>Sustainability</span>
          <span className=' text-2xl'><AiOutlineSearch/></span>
        </div>
        <div className='lg:hidden flex gap-6 text-xl text-white'>
            <span className=' text-2xl'><AiOutlineSearch/></span>
            <GiHamburgerMenu onClick={() => navToggle()}/>
        </div>
      </WrapperCard>
    </div>
    )}

    {(!showFirstNavbar && !isNavClicked) && (
    <div className='fixed top-0 w-full z-30 bg-white'>
        <WrapperCard className='flex justify-between items-center h-[5em] py-6'>
        <div className='flex items-center'>
            <img src={logo} alt='Logo' className='h-10 md:h-14' />
        </div>
        <div className=' basis-10/12 hidden lg:flex justify-between text-xs lg:text-base items-center w-full text-blue-900 lg:font-semibold'>
            <span className='mx-4'>Media</span>
            <span className='mx-4'>People</span>
            <span className='mx-4'>Locations & Contacts</span>
            <span className='mx-4'>About Us</span>
            <span className='mx-4'>Solutions</span>
            <span className='mx-4'>Sectors</span>
            <span className=' text-2xl'><AiOutlineSearch/></span>
        </div>
        <div className='lg:hidden flex gap-6 text-xl text-blue-900'>
            <span className=' text-2xl'><AiOutlineSearch/></span>
            <GiHamburgerMenu onClick={() => navToggle()}/>
        </div>
        </WrapperCard>
    </div>
    )}

    <div
        ref={navRef}
        className=" z-20 lg:hidden bg-white transition-height duration-300"
        style={{ height: isNavClicked ? '100vh' : '0', width: '100%' }}
      >
        {isNavClicked && (
          <WrapperCard className='relative'>
            {/* Mobile close button */}
            <div className=" flex justify-between items-center cursor-pointer pt-4">
              <div>
                <img src={logo} alt='Logo' onClick={navToggle} className='h-10 md:h-14' />
              </div>
              <AiOutlineClose size={26} color="blue" onClick={navToggle} />
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
}

export default Navbar;

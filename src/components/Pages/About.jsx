import React, { useEffect } from 'react'
import about from '../../assets/images/image0.jpg'
import dots from '../../assets/images/dots.svg'
import WrapperCard from '../UI/WrapperCard'

function About() {

    useEffect(() => {
        // Add a class to trigger the animation on mount
        const aboutElement = document.querySelector('.about-animation');
        if (aboutElement) {
          aboutElement.classList.add('animate-about');
        }
    
        // Clean up the animation class on component unmount
        return () => {
          if (aboutElement) {
            aboutElement.classList.remove('animate-about');
          }
        };
      }, []);
    

  return (
    <div className='relative'>
        <WrapperCard className='relative h-screen hidden lg:flex items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src={about}
                alt="About confab"
            />
            <WrapperCard className='z-10 text-white'>
                <h2 className='text-5xl font-semibold'>About Us</h2>
            </WrapperCard>
            
        </WrapperCard>

        <div className='lg:hidden relative h-screen flex items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src={about}
                alt="About confab"
            />
            <WrapperCard className='z-50 mt-52 text-white'>
                <h2 className='text-5xl font-semibold'>About Us</h2>
            </WrapperCard>
        </div>

        <WrapperCard className=' text-gray-600'>
           <div className=' py-12 lg:px-48'>
                <p className=' font-semibold '>
                As a distinguished staffing and recruitment firm specializing in STEM-driven solutions, including integrated facility management, we take pride in offering comprehensive services that cover both the sourcing and outsourcing of manpower within the Science, Technology, Engineering, and Mathematics (STEM) sectors. Our dedication to excellence is guided by the vision of "Engineering Excellence, Empowering Futures," ensuring that clients in the Oil and Gas, Power, and broader Energy industries receive tailored and adaptable staffing solutions.                
                <br/><br/>Our core services encompass:</p><br/>
                <ul className=' custom-list'>
                    <li>
                    <span className=' font-semibold text-black text-lg'>STEM Manpower Sourcing Solutions: </span>
                    We excel in identifying, attracting, and securing top-tier STEM talent for clients in the Oil and Gas, Power, and Energy sectors. Our stringent sourcing process guarantees the provision of professionals with the specific skills and expertise required for diverse projects.
                    </li>

                    <li>
                    <span className=' font-semibold text-black text-lg'>STEM Manpower Outsourcing Solutions: </span>
                    Acknowledging the dynamic nature of the industry, we provide flexible and efficient outsourcing solutions for STEM professionals. Whether clients need short-term project support or long-term staffing solutions, we offer a seamless outsourcing experience aligned with their unique requirements.
                    </li>
            
                    <li>
                    <span className=' font-semibold text-black text-lg'>Power Generation Manpower Solutions: </span>
                    Tailored to the Power sector, our sourcing and outsourcing solutions cater to the needs of power generation projects, covering both conventional and renewable energy sources. Our services contribute to the efficiency and success of power-related initiatives.
                    </li>

                    <li>
                    <span className=' font-semibold text-black text-lg'>Oil and Gas Manpower Services: </span>
                    In the Oil and Gas sector, our sourcing and outsourcing services span a wide range of roles, from exploration and production to refining and distribution. We deliver skilled professionals who significantly contribute to the success of projects within this complex industry.
                    </li>

                    <li>
                    <span className=' font-semibold text-black text-lg'>Renewable Energy Manpower Services: </span>
                    In the ever-expanding field of renewable energy, our STEM-driven solutions include both sourcing and outsourcing services to support the development and execution of wind, solar, hydropower, and other sustainable energy projects.
                    </li>

                    <li>
                    <span className=' font-semibold text-black text-lg'>Offshore Wind Manpower Solutions: </span>
                    Our specialized services extend to the offshore wind sector, providing sourcing and outsourcing solutions for STEM professionals engaged in offshore wind projects.
                    </li>

                    <li>
                    <span className=' font-semibold text-black text-lg'>Sustainable Infrastructures Staffing for Energy: </span>
                    With a focus on sustainable practices, our manpower solutions for sustainable infrastructures in the energy sector include both sourcing and outsourcing services, promoting diversity and inclusivity.
                    </li>

                    <li>
                    <span className=' font-semibold text-black text-lg'>Robotics & Industrialized Solutions Manpower Services for Energy: </span>
                    Collaborating with robotics and industrialized solutions, we provide both sourcing and outsourcing solutions for STEM experts, contributing to the development of cutting-edge technologies across the energy sector.
                    </li>


                </ul>

                <p className=' font-semibold mt-12'>
                With a global presence in approximately 9 countries and a diverse team of over 1500+ employees and a pipeline of 4000+, representing more than 9 nationalities, our sourcing and outsourcing solutions in the STEM sector are designed to meet the evolving needs of the Oil and Gas, Power, and broader Energy industries. Join us in empowering these sectors with flexible and transformative manpower solutions, including integrated facility management, staffing, and recruitment.                </p>
           </div>
        </WrapperCard>

        <WrapperCard className=' mb-12'>
            <div className=' flex flex-col lg:flex-row gap-8'>
                <div
                    className='lg:w-1/2 flex flex-col gap-6 bg-[#628e9e] px-8 lg:px-12 pt-20 pb-8 text-white'
                    style={{
                    backgroundImage: `url(${dots})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    
                    <h2 className=' text-4xl font-bold'>OUR MISSION</h2>
                    <p className='  mt-3'>
                    We are on a mission to provide unparalleled staffing and recruitment solutions, specializing in the Science, Technology, Engineering, and Mathematics (STEM) sectors within the Oil and Gas, Power, and broader Energy industries. With an unwavering commitment to excellence, our mission is to be the preferred partner for our clients, delivering top-tier STEM professionals and fostering an environment where innovation and sustainability thrive. Through meticulous sourcing and outsourcing services, we aim to empower our clients, contribute to the success of their projects, and build a diverse and inclusive workforce that reflects the global nature of our industry.
                    </p>
                    <span className='font-semibold bg-white w-fit p-4 text-blue-900 flex items-center'>
                    DISCOVER MORE
                    </span>
                </div>

                <div
                    className='lg:w-1/2 flex flex-col gap-6 bg-[#628e9e] px-8 lg:px-12 pt-20 pb-8 text-white'
                    style={{
                    backgroundImage: `url(${dots})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    
                    <h2 className=' text-4xl font-bold'>OUR VISION</h2>
                    <p className='  mt-3 flex-grow'>
                    At Confab, our visionary outlook propels us towards a future defined by sustainability and innovation. Our steadfast vision is 'Engineering Excellence, Empowering Futures,' inspiring us to lead the way in shaping a dynamic and sustainable world through the transformative power of STEM talent and cutting-edge solutions.
                    </p>
                    <span className=' font-semibold bg-white w-fit p-4 text-blue-900 flex items-center'>
                    DISCOVER MORE
                    </span>
                </div>

                
            </div>
      </WrapperCard>

    </div>
  )
}

export default About
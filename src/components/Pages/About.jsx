import React from 'react'
import about from '../../assets/images/image0.jpg'
import { FaRegEye } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import WrapperCard from '../UI/WrapperCard'
import VM from '../VM'


function About() {
  return (
    <div className='relative'>
        <div className='relative h-[550px] flex items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src={about}
                alt="About confab"
            />
            <WrapperCard className=' z-10 text-white'>
                <div className='mt-40 md:mt-0    md:absolute shadow-lg shadow-white bottom-20 p-4 md:p-10 flex flex-col  gap-6 border-4 border-white'>
                    <h2 className=' text-5xl font-semibold '>About Us</h2>
                    <p className=' max-w-[400px]'>
                        Our commitment to excellence is driven by the vision of "Engineering Excellence, Empowering Futures," ensuring that our clients in the Oil and Gas, Power, and broader Energy industries receive tailored and flexible staffing solutions.
                    </p>
                </div>
            </WrapperCard>
            
        </div>
        <VM/>

        <div className='bg-gray-100 py-16'>
            <h2 className=' text-center text-blue-900 text-2xl md:text-5xl font-bold'>OUR VISION & MISSION</h2>
            <WrapperCard className='flex flex-col items-center gap-24 mt-20'>
                {/* Vision Section */}
                <div className='w-full max-w-4xl'>
                    <div className='flex items-center gap-4'>
                    <div className='hidden md:block basis-1/5'>
                        <FaRegEye className='text-[180px] border-4 p-6 text-blue-900 rounded-full border-blue-900' />
                    </div>
                    <div className='basis-auto md:basis-3/5 mx-auto'>
                        <h2 className='font-bold text-4xl'>VISION</h2>
                        <p className='text-sm '>At Confab, our visionary outlook propels us towards a future defined by sustainability and innovation. Our steadfast vision is 'Engineering Excellence, Empowering Futures,' inspiring us to lead the way in shaping a dynamic and sustainable world through the transformative power of STEM talent and cutting-edge solutions.</p>
                    </div>
                    </div>
                </div>

                 {/* Mission Section */}
                <div className='w-full max-w-4xl'>
                    <div className='flex items-center gap-4'>
                    <div className='basis-auto md:basis-3/5'>
                        <h2 className='font-bold text-4xl'>MISSION</h2>
                        <p className='text-sm '>We are on a mission to provide unparalleled staffing and recruitment solutions, specializing in the Science, Technology, Engineering, and Mathematics (STEM) sectors within the Oil and Gas, Power, and broader Energy industries. With an unwavering commitment to excellence, our mission is to be the preferred partner for our clients, delivering top-tier STEM professionals and fostering an environment where innovation and sustainability thrive. Through meticulous sourcing and outsourcing services, we aim to empower our clients, contribute to the success of their projects, and build a diverse and inclusive workforce that reflects the global nature of our industry.</p>
                    </div>
                    <div className='hidden md:block basis-1/5 mx-auto '>
                        <MdRocketLaunch className='text-[180px] border-4 p-6 text-blue-900 rounded-full border-blue-900' />
                    </div>
                    </div>
                </div>
            </WrapperCard>

        </div>
    </div>
  )
}

export default About
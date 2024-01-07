import React from 'react'
import WrapperCard from './UI/WrapperCard'
import logo from '../assets/images/logo.png'

function Navbar() {
  return (
    <div className=' shadow-md '>
        <div className='bg-gray-500'>
            <WrapperCard className='flex justify-end gap-6 text-gray-100 p-1 text-sm'>
                <span className=''>Company</span>
                <span className=''>Press</span>
                <span className=''>Jobs</span>
            </WrapperCard>
        </div>
        <WrapperCard className="flex justify-between items-center h-16  py-6">
            <div className=' basis-1/6'>
                <img src={logo} alt="Logo" className=" h-12 " />
            </div>
            <div class="flex justify-between my-auto basis-4/6 text-xs text-gray-500 font-semibold">
                <span className="">ABOUT US</span>
                <span className="">OUR TEAM</span>
                <span className="">INDUSTRIES</span>
                <span className="">SERVICES</span>
                <span className="">CERTIFICATIONS & AWARDS</span>
                <span className="">BLOGS</span>
                <span className="">JOBS</span>
                <span className='w-[1px]  bg-gray-400'></span>
                <span className="">CONTACT US</span>
            </div>
        </WrapperCard>
    </div>
  )
}

export default Navbar
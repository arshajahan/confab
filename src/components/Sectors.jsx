import React from 'react'
import WrapperCard from './UI/WrapperCard'
import dots from '../assets/images/dots.svg'

function Sectors() {
  return (
    <div className='relative'>
        <WrapperCard className=' '>
            <img
                className=' opacity-15 absolute top-0 left-0 w-full h-full object-cover z-0'
                src={dots}
            />
            <div className='py-8'>
            <h2 className='text-blue-900 font-bold text-4xl text-center'>
                Sectors
            </h2>
            <div className='flex flex-col gap-5 justify-center '>
                <div className='flex gap-5 flex-wrap lg:text-2xl text-lg justify-center text-center py-10'>
                    <span className='px-6 py-3 bg-gray-800 text-white'>OIL & GAS</span>
                    <span className='px-6 py-3 bg-gray-800 text-white'>CONSTRUCTION</span>
                    <span className='px-6 py-3 bg-gray-800 text-white'>ENERGY & UTILITIES</span>
                    <span className='px-6 py-3 bg-gray-800 text-white'>TECHNOLOGY</span> 
                    <span className='px-6 py-3 bg-gray-800 text-white'>HEALTHCARE</span>
                    <span className='px-6 py-3 bg-gray-800 text-white'>ENGINEERING</span>
                    <span className='px-6 py-3 bg-gray-800 text-white'>F & B</span>
                    <span className='px-6 py-3 bg-gray-800 text-white'>LOGISTICS & TRANSPORTATION</span>
                </div>
                {/* <div className='flex justify-center mt-4'>
                    <button className='bg-blue-950 text-white px-4 py-2 rounded-md'>
                    VIEW ALL
                    </button>
                </div> */}
            </div>
            </div>
        </WrapperCard>
    </div>

  )
}

export default Sectors
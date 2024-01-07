import React from 'react'
import WrapperCard from './UI/WrapperCard'

function Industries() {
  return (
    <div>
        <WrapperCard className=''>
            <div className='py-8'>
            <h2 className='text-center text-xl font-bold text-blue-900'>INDUSTRIES WE SERVE</h2>
            <div className='flex flex-col gap-5 justify-center '>
                <div className='flex gap-5 flex-wrap text-2xl text-center justify-center py-10'>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>OIL & GAS</span>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>INFRASTRUCTURE</span>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>POWER</span>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>CHEMICALS</span>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>TECHNOLOGY</span>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>ENERGY SECTOR</span>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>RAIL</span>
                    <span className='p-3 bg-gray-800 text-white w-[14rem]'>MANUFACTURING</span>
                </div>
                <div className='flex justify-center mt-4'>
                    <button className='bg-blue-950 text-white px-4 py-2 rounded-md'>
                    VIEW ALL
                    </button>
                </div>
            </div>
            </div>
        </WrapperCard>
    </div>

  )
}

export default Industries
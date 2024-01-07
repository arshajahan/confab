import React from 'react'
import Navbar from './Navbar'
import WrapperCard from './UI/WrapperCard'

function Banner() {
  return (
    <div>
        <Navbar/>
        <div className='h-[30rem] bg-gray-100 flex justify-center items-center'>
            <WrapperCard className='flex items-center'>
                <div className='grid gap-10 py-4'>
                    <h1 className='text-5xl text-blue-950 font-semibold'>Welcome to Confab International</h1>
                    <p className='text-lg'>
                        Confab International is a premier sourcing 
                        and outsourcing company specializing in 
                        delivering top-tier manpower solutions 
                        across diverse industries. They excel in 
                        providing skilled professionals to enhance 
                        client workforces, fostering productivity 
                        and success
                    </p>
                    <div className='flex mt-4'>
                        <button className='bg-blue-950 text-white px-4 py-2 rounded-md'>
                        KNOW MORE
                        </button>
                    </div>
                </div>
            </WrapperCard>
        </div>

    </div>
  )
}

export default Banner
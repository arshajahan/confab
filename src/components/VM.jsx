import React from 'react'
import WrapperCard from './UI/WrapperCard'

function VM() {
  return (
    <div>
        <WrapperCard className='grid gap-8 py-12 '>
            <h2 className='text-blue-900 font-semibold text-3xl col-span-2'>
                Confab International
            </h2>
            <div className=' flex gap-28'>
            <div className=' grid gap-4 basis-1/2'>
                <h2 className=' text-xl font-semibold'>Our Vision</h2>
                <p className=' text-lg text-justify'>
                To be the go-to partner for simplified 
                talent solutions, streamlining sourcing 
                and outsourcing processes. We envision 
                a future where businesses thrive with 
                the right people in the right roles. 
                Committed to delivering efficient and 
                reliable workforce solutions, we 
                empower organizations to focus on 
                core objectives.
                </p>
            </div>
            <div className=' flex flex-col gap-4 basis-1/2'>
                <h2 className=' text-xl font-semibold'>Our Mission</h2>
                <p className=' text-lg text-justify'>
                Accelerate business growth through talent, 
                competitiveness, and client satisfaction.
                </p>
            </div>
            </div>
        </WrapperCard>

    </div>
  )
}

export default VM
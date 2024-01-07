import React from 'react'
import WrapperCard from './UI/WrapperCard'
import eng from '../assets/images/eng.webp'

function Services() {
  return (
    <div className=' bg-gray-100'>
        <WrapperCard className='py-8'>
            <h2 className=' text-center text-xl font-bold text-blue-900'>SERVICES</h2>
            <div className='flex gap-24 py-8 mt-4 justify-between items-center'>
                <div className=' basis-1/2 flex flex-col gap-6'>
                    <h2 className=' text-2xl font-semibold text-blue-900'>Engineering Services</h2>
                    <p className=' text-justify'>
                    At Confab International, we believe that a 
                    capable workforce is the heart of every 
                    successful organization. Join us in shaping 
                    a future where your team is not just a part 
                    of your organization but a driving force 
                    behind its accomplishments. Contact us to 
                    embark on a journey of workforce 
                    excellence, growth, and prosperity.
                    </p>
                    <div className='flex mt-4'>
                        <button className='bg-blue-950 text-white px-4 py-2 rounded-md'>
                        KNOW MORE
                        </button>
                    </div>
                </div>
                <div className=' basis-1/2'>
                    <img className=' h-[20rem]' src={eng}/>
                </div>
            </div>
        </WrapperCard>
    </div>
  )
}

export default Services
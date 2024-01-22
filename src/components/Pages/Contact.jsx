import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import contactus from '../../assets/images/contactus.png'

function Contact() {
  return (
    <div>
        {/* <WrapperCard className='lg:flex hidden relative h-screen  items-center'>
              <img
                  className='absolute top-0 left-0 w-full h-full object-cover z-0'
                  src={contactus}
                  alt="About confab"
              />
              <WrapperCard className='z-10 text-white'>
                  <h2 className=' text-4xl lg:text-5xl font-semibold lg:w-3/4 '>Contact Us</h2>
                  <p className='w-2/3 text-lg font-semibold mt-8'>Get in Touch with Us</p>
              </WrapperCard>
          </WrapperCard> */}

          <div className=' relative h-screen flex items-center'>
              <img
                  className='absolute top-0 left-0 w-full h-full object-cover z-0'
                  src={contactus}
                  alt="About confab"
              />
              <WrapperCard className='z-10 text-white'>
                  <h2 className=' text-4xl lg:text-5xl font-semibold lg:w-3/4 '>Contact Us</h2>
                  <p className='w-2/3 text-lg font-semibold mt-8'>Get in Touch with Us</p>
              </WrapperCard>
        </div>
    </div>
  )
}

export default Contact
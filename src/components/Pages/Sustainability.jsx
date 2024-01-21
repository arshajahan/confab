import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import sustainability from '../../assets/images/sustainability.webp'

function Sustainability() {
  return (
    <div>
        <div className='relative h-screen flex items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full z-0'
                src={sustainability}
                alt="About confab"
            />
            <WrapperCard className='z-10 text-white'>
                <h2 className=' text-2xl lg:text-6xl font-semibold lg:w-1/2 '>Confab's drive for sustainability</h2>
                <p className='w-2/3 text-lg mt-8'>Energy infrastructure is the most important driver for sustainable development. Saipem wants to be at the forefront of this evolution, playing an enabling role in the energy transition.</p>
            </WrapperCard>
            
        </div>
    </div>
  )
}

export default Sustainability
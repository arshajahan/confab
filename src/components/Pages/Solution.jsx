import React from 'react'
import WrapperCard from '../UI/WrapperCard'
import { useParams } from 'react-router-dom';
import { solutions } from '../../assets/constants'


function Solution() {

    const { id } = useParams();

    const selectedSolution = solutions.find(item => item.path === id);

  return (
    <div className='relative'>
        <div className='relative h-[600px] lg:h-screen flex items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src={selectedSolution.image}
                alt="About confab"
            />
            <WrapperCard className='z-10 text-white'>
                <h2 className='text-5xl w-2/4 font-semibold'>{selectedSolution.title}</h2>
            </WrapperCard>
        </div>

        <WrapperCard className='text-main'>
            {selectedSolution.page}
        </WrapperCard>


    </div>
  )
}

export default Solution

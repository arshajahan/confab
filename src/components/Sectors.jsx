import React from 'react';
import WrapperCard from './UI/WrapperCard';
import { Link } from 'react-router-dom';
import { sectorsData } from '../assets/constants';

function Sectors() {
  const smoothScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='relative'>
      <WrapperCard className=' '>
        <div className='py-8'>
          <h2 className='text-main font-bold text-4xl text-center'>
            Sectors
          </h2>
          <div className="flex flex-wrap mt-8">
            {sectorsData.slice(0, 8).map((sector, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
                <Link to={`/sectors/${sector.id}`} onClick={ () => smoothScroll()} className="bg-gray-200 py-10 px-4 rounded-lg text-center h-full flex flex-col justify-center">
                  <img src={sector.icon} className='w-24 h-24 mx-auto' alt={sector.alt} />
                  <p className="text-gray-800 mt-2 text-sm font-semibold">{sector.title}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to={`/sectors/${sectorsData[0].id}`} id='solutions' className='bg-main text-white z-10 px-4 py-2 '>
              View All
            </Link>
          </div>
        </div>
      </WrapperCard>
    </div>
  );
}


export default Sectors;

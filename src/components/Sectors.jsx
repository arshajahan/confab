import React from 'react';
import WrapperCard from './UI/WrapperCard';
import dots from '../assets/images/dots.svg';
import architect from '../assets/images/architect.png';
import engineering from '../assets/images/engineering.png';
import healthcare from '../assets/images/healthcare.png';
import healthydrink from '../assets/images/healthy-drink.png';
import logistics from '../assets/images/logistics.png';
import oilpump from '../assets/images/oil-pump.png';
import touch from '../assets/images/touch.png';
import utilities from '../assets/images/utilities.png';
import bank from '../assets/images/bank.png';

function Sectors() {
  return (
    <div className='relative'>
      <WrapperCard className=' '>
        <img
          className='opacity-15 absolute top-0 left-0 w-full h-full object-cover z-0'
          src={dots}
          alt="Background Dots"
        />
        <div className='py-8'>
          <h2 className='text-blue-900 font-bold text-4xl text-center'>
            Sectors
          </h2>
          <div className="flex flex-wrap mt-8">
            {sectorsData.map((sector, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
                <div className="bg-gray-200 py-6 px-4 rounded-lg text-center h-full flex flex-col justify-center">
                  <img src={sector.icon} className='w-24 h-24 mx-auto' alt={sector.alt} />
                  <p className="text-gray-800 mt-2 text-sm font-semibold">{sector.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperCard>
    </div>
  );
}

const sectorsData = [
  { icon: architect, title: 'Infrastructure', alt: 'Infrastructure Icon' },
  { icon: oilpump, title: 'Oil & Gas', alt: 'Oil & Gas Icon' },
  { icon: touch, title: 'Technology', alt: 'Technology Icon' },
  { icon: engineering, title: 'Engineering', alt: 'Engineering Icon' },
  { icon: logistics, title: 'Logistics & Transportation', alt: 'Logistics & Transportation Icon' },
  { icon: bank, title: 'Banking & Finance', alt: 'Banking & Finance Icon' },
  { icon: healthcare, title: 'Healthcare', alt: 'Healthcare Icon' },
  { icon: utilities, title: 'Utilities', alt: 'Utilities Icon' },
];

export default Sectors;

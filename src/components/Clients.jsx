import React from 'react';
import WrapperCard from './UI/WrapperCard';
import ahmadiah from '../assets/images/ahmadiah.png'
import bk from '../assets/images/bk.png'
import carrefour from '../assets/images/carrefour.png'
import cggc from '../assets/images/cggc.png'
import fridays from '../assets/images/fridays.png'
import hardees from '../assets/images/hardees.png'
import kfc from '../assets/images/kfc.png'
import lt from '../assets/images/lt.png'
import lulu from '../assets/images/lulu.png'
import petrofac from '../assets/images/petrofac.png'
import saipem from '../assets/images/saipem.png'
import sinopec from '../assets/images/sinopec.png'

const Clients = () => {
  // Sample client logos, replace these with your data
  const clientLogos = [
    ahmadiah,
    bk,
    carrefour,
    cggc,
    fridays,
    hardees,
    kfc,
    lt,
    lulu,
    petrofac,
    saipem,
    sinopec
  ];

  return (
    <div className='bg-gray-100'>
      <WrapperCard className=''>
        <div className='py-8'>
          <h2 className='text-center text-xl font-bold text-[#2b495a]'>OUR CLIENTS</h2>
          <div className='flex flex-wrap gap-8 justify-center mt-8'>
            {clientLogos.map((logo, index) => (
              <div key={index} className='m-2'>
                <img src={logo} alt={`Logo ${index}`} className='w-24 h-24 object-contain' />
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-4'>
            <button className='bg-blue-950 text-white px-4 py-2 rounded-md'>
              VIEW ALL
            </button>
          </div>
        </div>
      </WrapperCard>
    </div>
  );
};

export default Clients;

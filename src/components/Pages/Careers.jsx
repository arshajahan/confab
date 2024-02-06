import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import career from '../../assets/images/career.webp';

function Careers() {
  const backgroundImageStyle = 'absolute top-0 left-0 w-full h-full object-cover z-0';
  const cardStyle = 'text-white text-5xl font-semibold';

  return (
    <div>
      {/* Desktop View */}
      <div className='relative h-[550px] hidden lg:flex items-center'>
        <img className={backgroundImageStyle} src={career} alt="career confab" />
        <WrapperCard className={`z-10 ${cardStyle}`}>
          <h2>Careers</h2>
        </WrapperCard>
      </div>

      {/* Mobile View */}
      <div className='lg:hidden relative h-[600px] flex items-center'>
        <img className={backgroundImageStyle} src={career} alt="About confab" />
        <WrapperCard className='z-50 mt-52 text-white'>
          <h2 className='text-5xl font-semibold'>Careers</h2>
        </WrapperCard>
      </div>

      {/* Content */}
      <WrapperCard className='text-center flex justify-center'>
        <div className='py-10 text-main lg:text-2xl w-full lg:w-1/3'>
          For current and future openings,
          you may forward your resume to
          <span className='text-blue-500'> careers@confabint.com</span>
        </div>
      </WrapperCard>
    </div>
  );
}

export default Careers;

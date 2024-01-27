import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <div className='pt-32 lg:pt-48 pb-6'>
      <WrapperCard className='flex flex-col lg:flex-row justify-between'>
        <div className='mb-8'>
          <h2 className='text-4xl text-main font-semibold mb-4'>Terms and Conditions</h2>
          <Link
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
            }}
            to='/contact-us'
            className='font-semibold text-main'
          >
            Contact us
          </Link>
        </div>
        <div className='lg:w-1/2 p-8 bg-gray-100 grid gap-7'>
          <p className='text-main'>Latest update: January 2024</p>

          <p className='font-semibold text-main'>
            By accessing and using the services provided by Confab International, you agree to comply with the following
            terms and conditions.
          </p>

          <p>
            <strong>1. Use of Services</strong>
            <br />
            You agree to use our services for lawful purposes and in compliance with all applicable laws and regulations.
            Any unauthorized use or violation of these terms may result in the termination of services.
          </p>

          <p>
            <strong>2. Intellectual Property</strong>
            <br />
            All content and materials on our website, including but not limited to text, graphics, logos, and images, are
            the property of Confab International and are protected by intellectual property laws. You may not
            reproduce, modify, or distribute our content without explicit permission.
          </p>

          <p>
            <strong>3. Privacy</strong>
            <br />
            Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to
            understand how we collect, use, and protect your personal information.
          </p>

          <p>
            <strong>4. Changes to Terms</strong>
            <br />
            Confab International reserves the right to update and modify these terms and conditions at any time. Any
            changes will be effective upon posting on our website. It is your responsibility to review the terms
            periodically.
          </p>

          <strong>Contact Us</strong>
          <p>
            For questions or concerns regarding these terms and conditions, please contact us via email at:{' '}
            <a href="mailto:legal@confabint.com" className='text-blue-700'>
              legal@confabint.com
            </a>{' '}
            or visit our website at{' '}
            <a href="http://www.confabint.com/terms" target="_blank" rel="noopener noreferrer" className='text-blue-700'>
              www.confabint.com/terms
            </a>
            .
          </p>
        </div>
      </WrapperCard>
    </div>
  );
}

export default Terms;

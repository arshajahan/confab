import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className='pt-32 lg:pt-48 pb-6'>
      <WrapperCard className='flex flex-col lg:flex-row justify-between'>
        <div className='mb-8'>
          <h2 className='text-4xl text-main font-semibold mb-4'>Privacy Policy</h2>
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
            At Confab International, we are committed to protecting your privacy and ensuring the security of your personal
            information. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>

          <p>
            We may collect information such as your name, contact details, and other relevant data when you interact with
            our website, products, or services. This information is used for communication, providing services, and
            improving our offerings.
          </p>

          <h2 className='text-2xl text-main'>Data Security</h2>
          <p>
            We take appropriate measures to secure your personal information and prevent unauthorized access or
            disclosure. Our security protocols and technologies are regularly updated to ensure the confidentiality and
            integrity of your data.
          </p>

          <p className='text-main font-semibold'>Your Rights</p>

          <p>
            You have the right to review, update, or request the deletion of your personal information. If you have any
            concerns or queries regarding your data, please contact us using the information provided below.
          </p>

          <p>
            We may update our Privacy Policy to reflect changes in data protection laws or our business practices. Any
            revisions will be posted on our website, and we encourage you to review the policy periodically.
          </p>

          <strong>Contact Us</strong>
          <p>
            For privacy-related inquiries or to exercise your rights, please contact us via email at:{' '}
            <a href="mailto:privacy@confabint.com" className='text-blue-700'>
              privacy@confabint.com
            </a>{' '}
            or visit our website at{' '}
            <a href="http://www.confabint.com/privacy" target="_blank" rel="noopener noreferrer" className='text-blue-700'>
              www.confabint.com/privacy
            </a>
            .
          </p>
        </div>
      </WrapperCard>
    </div>
  );
}

export default PrivacyPolicy;

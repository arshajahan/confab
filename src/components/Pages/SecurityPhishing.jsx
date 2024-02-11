import React from 'react';
import WrapperCard from '../UI/WrapperCard';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function SecurityPhishing() {
  return (

    <>
        <Helmet>
            <title>Security & Phishing Awareness</title>
            <meta 
            name='description'
            content="Discover how we prioritize cybersecurity to protect our clients, employees, and data from online threats."
            />
            <link rel='canonical' href='/security-phishing'/>
        </Helmet>

        <div className='pt-32 lg:pt-48 pb-6'>
            <WrapperCard className='flex flex-col lg:flex-row justify-between'>
                <div className=' mb-8'>
                    <h2 className='text-4xl text-main font-semibold mb-4'>Security & Phishing</h2>
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
                    <p className=' text-main'>Latest update: January 2024</p>
                    
                    <p className=' font-semibold text-main'>Multiple fraud attempts using the CONFAB name and trademark have been reported in several countries. Please be aware that CONFAB or representative will NEVER request payment of any kind from a candidate or an associate during a job search or a selection process.</p>

                    <p>
                    We have been informed that the CONFAB name and trademark are being used in several countries by persons who are in no way related to the CONFAB Group. These persons place job adverts on general market websites using the name ‘CONFAB’ without our permission. We also have reason to believe that e-mails, letters, telephone calls, and other actions taken by these persons are nothing but illegitimate attempts to obtain money and access to job seekers’ and associates’ personal and confidential information.
                    </p>
                    <h2 className='text-2xl text-main'>Protect Yourself</h2>
                    <p>
                    Before releasing any personal information, ID, or bank account details during a job search process, make sure your contact is an authorized CONFAB representative. You can confirm this by getting in touch with an CONFAB office in your country. You can find the list of the countries in which we operate on our website at <a href="https://www.confabint.com/" target="_blank" rel="noopener noreferrer">https://www.confabint.com/</a>.
                    </p>

                    <p className=' text-main font-semibold'>Beware of any unexpected e-mail, instant message, voicemail, or fax that claims to be from CONFAB.</p> 
                    
                    <p>
                        Criminals can attempt to send malware or obtain access to your information or accounts using emails, phone, or text. If you receive such a message, get in touch with an CONFAB office in your country and verify that the message is legitimate.
                    </p>

                    <p>
                    If you have received an email which you are not quite sure about, please forward it to us using the contact details in the section below.
                    </p>

                    <p>
                    If you believe that you have been a victim of such scams, we strongly recommend that you report the incident to local authorities as soon as possible.
                    </p>

                    <strong>Contact Us</strong>
                    <p>
                    If you would like to report an abuse of the CONFAB name and trademark, please contact the CONFAB office in the country where the incident occurred. If CONFAB does not operate in that country, please send an email to: <a href="mailto:compliance@confabint.com"><span className=' text-blue-700'>compliance@confabint.com</span></a> or visit <a href="http://www.confabint.com" target="_blank" rel="noopener noreferrer" className=' text-blue-700'>www.confabint.com</a>.
                    </p>

                    <p>
                    If you are looking for a job in your country, then please reach out to us. A list of the countries in which we operate can be found on our website at <a href="https://www.confabint.com/"  target="_blank" rel="noopener noreferrer" className=' text-blue-700'>www.confabint.com</a>.
                    </p>
                </div>
            </WrapperCard>
        </div>
    </>
  );
}

export default SecurityPhishing;

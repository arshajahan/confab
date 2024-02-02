
import React, { useState } from 'react';
import WrapperCard from '../UI/WrapperCard';
import contactus from '../../assets/images/contactus.jpg';
import { staticCountries as countries } from '../../assets/constants';

function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [showCountryError, setCountryError] = useState(false);
  const [firstName, setFirstName ] = useState("");


  const handleCountryChange = () => {
    // Hide the country error message when a country is selected
    setCountryError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the country dropdown
    const selectedCountry = e.target['country'].value;

    if (selectedCountry === 'select') {
      // Country is not selected, show error message
      setCountryError(true);
      return; // Exit the function without further processing
    }

    // If the country is selected, proceed with form submission
    const formData = {
      firstName: e.target['first-name'].value,
      lastName: e.target['last-name'].value,
      email: e.target['company-email'].value,
      companyName: e.target['company-name'].value,
      jobTitle: e.target['job-title'].value,
      phoneNumber: e.target['phone-number'].value,
      country: selectedCountry,
      message: e.target['message'].value,
    };
    setFirstName(formData.firstName);
    console.log('Form Data:', formData);

    // Perform any additional actions (e.g., submit to a backend, show thank-you message)
    setSubmitted(true);
  };

  return (
    <div>
      <div className='relative h-[600px] lg:h-screen flex items-center'>
        <img
          className='absolute top-0 left-0 w-full h-full object-cover z-0'
          src={contactus}
          alt="About confab"
        />
        <WrapperCard className='z-10 text-white'>
          <h2 className='text-4xl lg:text-5xl font-semibold lg:w-3/4 '>Get in Touch with Us</h2>
        </WrapperCard>
      </div>

      <div className='py-8'>
        <WrapperCard className='flex flex-col lg:flex-row justify-between'>
          <div className='basis-2/5 mb-12 flex flex-col gap-8'>
            <h2 className='text-4xl text-main font-semibold '>Contact Us</h2>
            <p>
              Are you interested in one of our services or solutions? Or do you have a general inquiry that we can assist you with? Please use this contact form, and we will promptly route your request to our team of experts.
            </p>
            <p>
              For job applications or job searches, kindly send your resume to <a href="mailto:jobs@confabint.com" className='text-red-400'>careers@confabint.com</a> for potential opportunities.
            </p>
          </div>

          <div className='basis-1/2 p-4 lg:p-10 bg-gray-100 grid gap-7'>
           
            {isSubmitted ? (
              <div className='text-main text-lg my-auto text-center'>
                😊 Thank you {firstName} for submitting your request. <br/>We will get in touch with you as soon as possible.
              </div>
            ) : (
              <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                <p><span className='text-red-700'>*</span> indicates a required field</p>

             

                    <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 lg:pr-2'>
                        <label htmlFor='first-name'>FIRST NAME *</label>
                        <input type='text' id='first-name' name='first-name' required className='px-2 w-full h-[35px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md' />
                    </div>
                    <div className='w-full lg:w-1/2 lg:pl-2'>
                        <label htmlFor='last-name'>LAST NAME *</label>
                        <input type='text' id='last-name' name='last-name' required className='px-2 w-full h-[35px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md' />
                    </div>
                    </div>

                    <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <label htmlFor='email'>EMAIL *</label>
                        <input type='email' id='company-email' name='company-email' required className='px-2 w-full h-[35px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md' />
                    </div>
                    </div>

                    <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 lg:pr-2'>
                        <label htmlFor='company-name'>COMPANY NAME</label>
                        <input type='text' id='company-name' name='company-name' className='px-2 w-full h-[35px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md' />
                    </div>
                    <div className='w-full lg:w-1/2 lg:pl-2'>
                        <label htmlFor='job-title'>JOB TITLE</label>
                        <input type='text' id='job-title' name='job-title' className='px-2 w-full h-[35px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md' />
                    </div>
                    </div>

                    <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <label htmlFor='phone-number'>PHONE NUMBER *</label>
                        <input type='number' id='phone-number' name='phone-number' required className='px-2 w-full h-[35px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md' />
                    </div>
                    </div>

                    <div className='flex flex-wrap'>
                    <div className='w-full'>
                        <label htmlFor='country'>COUNTRY *</label>
                        <select 
                            id='country' 
                            name='country' 
                            required 
                            className='px-2 w-full h-[35px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md'
                            onChange={handleCountryChange}>
                        <option value='select'>Select Country</option>
                        {countries.map((country, index) => (
                            <option key={index} value={country}>
                            {country}
                            </option>
                        ))}
                        </select>
                    </div>
                    </div>

                    <div className='form-group'>
                    <label htmlFor='message'>YOUR MESSAGE *</label>
                    <textarea id='message' required className='px-2 w-full h-[200px] border-[1px] border-main focus:border-red-400 focus:outline-none rounded-md' name='message' rows='4' maxLength='1000'></textarea>
                    </div>

                    <div className='form-group '>
                    <label className='flex gap-2 '>
                        <input className='w-[17px] h-[17px] mt-1' type='checkbox' required />
                        <span className=''>I acknowledge that I read and accepted the <a className='text-main underline' href=''>Terms & condition</a> and <a className='text-main underline' href=''>privacy policy</a>.</span>
                    </label>
                    </div>
                 
                    {showCountryError && (
                        <div className='text-red-700 text-sm mb-4'>
                            Please select a country.
                        </div>
                    )}
                    <div className='flex justify-left'>
                    <button type='submit' className='bg-blue-950 text-white z-10 px-4 py-2'>
                        SUBMIT
                    </button>
                    </div>
              </form>
            )}
          </div>
        </WrapperCard>
      </div>
    </div>
  );
}

export default Contact;





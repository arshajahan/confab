
import React, { useRef, useState } from 'react';
import WrapperCard from '../UI/WrapperCard';
import { staticCountries as countries } from '../../assets/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

function Contact() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [showCountryError, setCountryError] = useState(false);
  const [firstName, setFirstName ] = useState("");
  const form = useRef();

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
      firstName: e.target['first_name'].value,
      lastName: e.target['last-name'].value,
      email: e.target['company_email'].value,
      companyName: e.target['company_name'].value,
      jobTitle: e.target['job_title'].value,
      phoneNumber: e.target['phone_number'].value,
      country: selectedCountry,
      message: e.target['message'].value,
    };
    setFirstName(formData.firstName);

    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
    // console.log('Form Data:', formData);

  emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_ID)
    .then((result) => {

        // console.log(result.text);
        toast.success('Email sent successfully!');
        setSubmitted(true);
        e.target.reset();

    }, (error) => {
        console.log(error.text);
        toast.error('Failed to send email. Please try again.');
    });
    
  };

  return (
    <>
        <Helmet>
          <title>Expert Staffing Solutions</title>
          <meta 
            name='description'
            content='Contact Confab International for tailored staffing solutions in STEM sectors. Reach out for inquiries or collaborations.'
          />
          <link rel='canonical' href='/contact-us'/>
        </Helmet>

        <div>

          <div className='py-10 bg-gray-200 text-main'>
            <WrapperCard className='mt-24 lg:mt-40 flex flex-col lg:flex-row justify-between'>
              <div className='basis-2/5 mb-12 flex flex-col gap-8 text-sm'>
                <h2 className='text-4xl  font-semibold '>Contact Us</h2>
                <p>
                  Are you interested in one of our services or solutions? Or do you have a general inquiry that we can assist you with? Please use this contact form, and we will promptly route your request to our team of experts.
                </p>
                <p>
                  For job applications or job searches, kindly send your resume to <a href="mailto:jobs@confabint.com" className='text-red-400'>careers@confabint.com</a> for potential opportunities.
                </p>
              </div>

              <div className='basis-1/2 p-4 lg:p-10 bg-white grid gap-7'>
                <ToastContainer/>
              
                {isSubmitted ? (
                  <div className=' text-lg my-auto text-center'>
                    😊 Thank you {firstName} for submitting your request. <br/>We will get in touch with you as soon as possible.
                  </div>
                ) : (
                  <form ref={form} className='text-sm flex flex-col gap-4' onSubmit={handleSubmit}>
                    <p><span className='text-red-700'>*</span> indicates a required field</p>

                

                        <div className='flex gap-4 lg:gap-0 flex-wrap'>
                        <div className='w-full lg:w-1/2 lg:pr-2'>
                            <label htmlFor='first_name'>FIRST NAME *</label>
                            <input type='text' id='first_name' name='first_name' required className='px-2 w-full h-[35px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md' />
                        </div>
                        <div className='w-full lg:w-1/2 lg:pl-2'>
                            <label htmlFor='last-name'>LAST NAME *</label>
                            <input type='text' id='last-name' name='last-name' required className='px-2 w-full h-[35px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md' />
                        </div>
                        </div>

                        <div className='flex flex-wrap'>
                        <div className='w-full'>
                            <label htmlFor='company_email'>EMAIL *</label>
                            <input type='email' id='company_email' name='company_email' required className='px-2 w-full h-[35px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md' />
                        </div>
                        </div>

                        <div className='flex gap-4 lg:gap-0 flex-wrap'>
                        <div className='w-full lg:w-1/2 lg:pr-2'>
                            <label htmlFor='company_name'>COMPANY NAME</label>
                            <input type='text' id='company_name' name='company_name' className='px-2 w-full h-[35px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md' />
                        </div>
                        <div className='w-full lg:w-1/2 lg:pl-2'>
                            <label htmlFor='job_title'>JOB TITLE</label>
                            <input type='text' id='job_title' name='job_title' className='px-2 w-full h-[35px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md' />
                        </div>
                        </div>

                        <div className='flex flex-wrap'>
                        <div className='w-full'>
                            <label htmlFor='phone_number'>PHONE NUMBER *</label>
                            <input type='number' id='phone_number' name='phone_number' required className='px-2 w-full h-[35px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md' />
                        </div>
                        </div>

                        <div className='flex flex-wrap'>
                        <div className='w-full'>
                            <label htmlFor='country'>COUNTRY *</label>
                            <select 
                                id='country' 
                                name='country' 
                                required 
                                className='px-2 w-full h-[35px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md'
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
                        <textarea id='message' required className='px-2 w-full h-[200px] border-[1px] border-gray-300 focus:border-red-400 focus:outline-none rounded-md' name='message' rows='4' maxLength='1000'></textarea>
                        </div>

                        <div className='form-group '>
                        <label className='flex gap-4 items-center '>
                            <input id='checkbox' className='w-[17px] h-[17px] ' type='checkbox' required />
                            <span className=' text-sm'>I acknowledge that I read and accepted the <a className='text-main underline' href=''>Terms & condition</a> and <a className='text-main underline' href=''>privacy policy</a>.</span>
                        </label>
                        </div>
                    
                        {showCountryError && (
                            <div className='text-red-700 text-sm mb-4'>
                                Please select a country.
                            </div>
                        )}
                        <div className='flex justify-center'>
                        <button type='submit' className='bg-blue-950 text-white z-10 px-6 py-3'>
                            SUBMIT
                        </button>
                        </div>
                  </form>
                )}
              </div>
            </WrapperCard>
          </div>
        </div>
    </>
  );
}

export default Contact;





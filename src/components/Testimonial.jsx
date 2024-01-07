import React from 'react';
import WrapperCard from './UI/WrapperCard';
import Slider from 'react-slick';

const Testimonial = () => {
  // Sample testimonials data
  const testimonials = [
    {
      quote: 'Working with this company has been an absolutely fantastic experience! They went above and beyond to meet our requirements and deliver exceptional results. I highly recommend their services to anyone seeking professionalism, expertise, and a dedicated team.',
      name: 'John Doe',
      position: 'CEO',
      company: 'ABC Corp',
    },
    {
      quote: 'I am incredibly impressed with the level of service and support provided by this team. Their attention to detail, coupled with their innovative solutions, has truly made a difference for our organization. A big thumbs up!',
      name: 'Jane Smith',
      position: 'CTO',
      company: 'XYZ Inc',
    },
    {
      quote: 'Our collaboration with this company has been nothing short of exceptional. They not only met our expectations but exceeded them by delivering top-notch quality and showing immense dedication at every step of the process.',
      name: 'Alice Johnson',
      position: 'COO',
      company: 'DEF Ltd',
    },
    {
      quote: 'I have worked with various teams in the past, but the level of professionalism and expertise displayed by this group is unparalleled. Their commitment to delivering results and their innovative approach are truly commendable.',
      name: 'Robert Williams',
      position: 'CFO',
      company: 'GHI Group',
    },
    {
      quote: 'We are extremely satisfied with the services provided by this company. Their proactive approach, attention to detail, and ability to understand our needs sets them apart. Highly recommended for their exceptional services!',
      name: 'Emily Brown',
      position: 'VP of Operations',
      company: 'JKL Enterprises',
    },
    {
      quote: 'The support we received from this team was outstanding. Their commitment to ensuring our success was evident throughout the collaboration. They not only delivered results but also guided us with their expertise.',
      name: 'Michael Garcia',
      position: 'Head of Marketing',
      company: 'MNO Corporation',
    },
    {
      quote: 'The expertise and efficiency shown by this team are truly remarkable. Their ability to tackle complex challenges and deliver high-quality results within deadlines is impressive. A pleasure to work with!',
      name: 'Sophia Martinez',
      position: 'Lead Developer',
      company: 'PQR Innovations',
    },
    {
      quote: 'Consistency in delivering impressive work is the hallmark of this team. Their dedication, professionalism, and attention to detail have earned our trust. A reliable partner for achieving great outcomes!',
      name: 'William Davis',
      position: 'Product Manager',
      company: 'STU Solutions',
    },
    {
      quote: 'This company exceeded all our expectations with their outstanding service. Their proactive communication, responsiveness, and ability to deliver results promptly set them apart from others in the industry.',
      name: 'Olivia Wilson',
      position: 'Head of Sales',
      company: 'VWX Ventures',
    },
    {
      quote: " Exceptional service and outstanding results - that's what this company provided us. Their dedication, expertise, and innovative solutions have had a significant impact on our business growth.",
      name: 'Daniel Thompson',
      position: 'HR Director',
      company: 'YZA Corporation',
    },
  ];
  

  // Settings for the react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display three testimonials at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=''>
      <WrapperCard className=''>
        <div className='py-8'>
          <h2 className='text-center text-xl font-bold text-blue-900'>TESTIMONIALS</h2>
          <div className='mt-8'>
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index}>
                  <div className='p-4'>
                    <div className=' rounded-md p-6'>
                      <p className=' italic text-gray-500 text-left'>" {testimonial.quote} "</p>
                      <footer className='mt-4'>
                        <p className='text-sm'>{testimonial.name}</p>
                        <p className='text-sm'>{testimonial.position} at {testimonial.company}</p>
                      </footer>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </WrapperCard>
    </div>
  );
};

export default Testimonial;
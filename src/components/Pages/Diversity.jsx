import React from 'react'
import diversity from '../../assets/images/diversity.jpg'
import WrapperCard from '../UI/WrapperCard'

function Diversity() {
  return (
    <div>
      <WrapperCard className='lg:flex hidden relative h-screen  items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src={diversity}
                alt="About confab"
            />
            <WrapperCard className='z-10 text-white'>
                <h2 className=' text-4xl lg:text-5xl font-semibold lg:w-3/4 '>Diversity, Equity, Inclusion</h2>
                <p className='w-2/3 text-lg font-semibold mt-8'>We emphasize diversity and actively foster an inclusive culture within our globally-focused business.</p>
            </WrapperCard>
        </WrapperCard>

        <div className='lg:hidden relative h-screen flex items-center'>
            <img
                className='absolute top-0 left-0 w-full h-full object-cover z-0'
                src={diversity}
                alt="About confab"
            />
            <WrapperCard className='z-10 text-white'>
                <h2 className=' text-4xl lg:text-5xl font-semibold lg:w-3/4 '>Diversity, Equity, Inclusion</h2>
                <p className='w-2/3 text-lg font-semibold mt-8'>We emphasize diversity and actively foster an inclusive culture within our globally-focused business.</p>
            </WrapperCard>
        </div>


        <WrapperCard className=' '>
           <div className=' py-12 lg:px-48 grid gap-8 text-lg'>
                <h2 className=' text-4xl font-semibold'>OUR SUSTAINABLE JOURNEY</h2>
                <p>
                    Confab is unwavering in its commitment to recognizing and celebrating the inherent value that individuals bring to our organization. We hold firm in the belief that diverse backgrounds, varied leadership styles, and individual conduct all contribute to the rich tapestry that defines our company. At Confab, we understand that each person possesses the unique potential to generate significant value for our organization, and we actively cultivate an environment that harnesses and amplifies these diverse talents.
                </p>
                <p>
                    Our daily efforts are dedicated to the creation of a work environment that not only acknowledges but actively involves individuals in shaping the trajectory of Confab's future. With a resolute focus on diversity and inclusivity, we foster a culture that not only acknowledges differences but celebrates them as strengths. This commitment is especially vital given our strong international focus, recognizing that a variety of perspectives and experiences contribute to our collective success.
                </p>
                <p className=' lg:text-4xl text-xl text-main font-semibold'>
                    <span className=' lg:text-4xl text-yellow-500'>`` </span>Confab recognizes that our success is a collective endeavor, and as such, we invest in the creation of beneficial, transparent work environments. These environments are designed to facilitate collaboration among people and teams hailing from different countries, genders, and departments. We believe that by promoting open communication and understanding, we can harness the power of diverse talents to propel Confab to new heights.
                    <span className=' lg:text-4xl text-yellow-500'> ``</span>
                </p>
                <p>
                    Empowering women is a cornerstone of our commitment to diversity and inclusion. At Confab, we actively champion female empowerment through the establishment of a pool of Confab Role Models. These role models serve as inspirational figures, motivating and guiding young students at schools and universities. Our focus is particularly dedicated to supporting the development paths within STEM disciplines, ensuring that we play a crucial role in shaping a more inclusive and diverse future workforce.
                </p>
                <p>
                    In all facets of our services, including integrated facility management, Confab remains resolute in promoting diversity and inclusion as integral components of our organizational values. We firmly believe that by embracing and valuing differences, we not only foster innovation and creativity but also fortify the foundation for the overall success and sustainability of our company. Confab stands committed to a future where diversity and inclusion are not just embraced but celebrated as catalysts for excellence.                
                </p>
           </div>
        </WrapperCard>

    </div>
  )
}

export default Diversity
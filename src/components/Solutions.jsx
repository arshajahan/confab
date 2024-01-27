import React from 'react';
import WrapperCard from './UI/WrapperCard';
import { FaChevronCircleRight } from "react-icons/fa";
import { solutions } from '../assets/constants'
import { Link } from 'react-router-dom';

function Solutions() {

    return (
        <div className='bg-gray-100'>
            <WrapperCard className='py-14'>
                <h2 className='text-main font-bold text-4xl text-center'>
                    Our Solutions
                </h2>
                <div className='flex justify-between mt-12 gap-6 lg:flex-nowrap flex-wrap'>
                    {solutions.map((solution) => (
                        <div key={solution.id} className=' basis-full lg:basis-1/3 border-1 flex flex-col'>
                            <img src={solution.image} className='h-60 3xl:h-72 w-full' alt='' />
                            <div className='p-6 flex flex-col justify-between border-2 gap-8 flex-grow'>
                                <div>
                                    <h2 className='text-2xl font-bold my-6'>{solution.title}</h2>
                                    <p className='text-lg'>{solution.content}</p>
                                </div>
                                <Link 

                                    onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth',
                                    });
                                    }} 
                                    
                                    to={`/${solution.path}`} className='text-main font-semibold flex items-center mt-auto'>
                                    <FaChevronCircleRight className='mr-2 text-xl' />
                                    DISCOVER MORE
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </WrapperCard>
            <span id='sectors'></span>
        </div>
    );
}

export default Solutions;

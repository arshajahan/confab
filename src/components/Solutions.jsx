import React from 'react';
import WrapperCard from './UI/WrapperCard';
import sol1 from '../assets/images/sol1.jpg';
import sol2 from '../assets/images/sol2.jpg';
import sol3 from '../assets/images/sol3.jpg';
import { FaChevronCircleRight } from "react-icons/fa";

function Solutions() {
    const solutions = [
        {
            id: 0,
            image: sol1,
            title: 'STAFFING & WORKFORCE MANAGEMENT',
            content: 'Advance STEM workforce management strategies.'
        },
        {
            id: 1,
            image: sol2,
            title: 'CREWING MANAGEMENT',
            content: 'Offshore platforms, a project springboard.'
        },
        {
            id: 2,
            image: sol3,
            title: 'INTEGRATED FACILITY MANAGEMENT',
            content: 'Objective: to reduce environmental impact to the minimum.'
        }
    ];

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
                                <span className='text-main font-semibold flex items-center mt-auto'>
                                    <FaChevronCircleRight className='mr-2 text-xl' />
                                    DISCOVER MORE
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </WrapperCard>
        </div>
    );
}

export default Solutions;

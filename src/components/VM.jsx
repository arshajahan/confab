import React from 'react'
import WrapperCard from './UI/WrapperCard'
import bulb from '../assets/images/bulb.webp'
import expenditure from '../assets/images/expenditure.webp'
import nooil from '../assets/images/nooil.webp'
import zero from '../assets/images/zero.webp'
import dots from '../assets/images/dots.svg'
import { Link } from 'react-router-dom'

function VM() {
    const points = [
        {
            id: 0,
            image: bulb,
            count: '3',
            title: 'Average contract lifecycle in years'
        },
        {
            id: 1,
            image: nooil,
            count: '1500+',
            title: 'Workforce in projects'
        },
        {
            id: 2,
            image: zero,
            count: '4000+',
            title: 'Talent Pipeline'
        },
        {
            id: 3,
            image: expenditure,
            count: '9',
            title: 'Countries of Operation'
        },
    ];

    return (
        <div className='relative'>
            <WrapperCard className='text-main  py-14 grid gap-12 '
            >
                <img
                    className=' opacity-10 absolute top-0 left-0 w-full h-full object-cover z-0'
                    src={dots}
                />
                <h2 className=' font-bold text-xl lg:text-4xl text-center'>
                    Engineering Driven staffing for a sustainable future
                </h2>
                <div className='flex flex-wrap gap-4 justify-center w-full'>
                    {points.map((point) => (
                        <div key={point.id} className='flex basis-[250px] items-center justify-between p-4 gap-2 flex-col text-center'>
                            <img src={point.image} className='w-28' alt={point.title} />
                            <span className='text-5xl font-semibold'>{point.count}</span>
                            {/* Apply consistent height to titles */}
                            <div className='h-20'> {/* Set a fixed height, adjust as needed */}
                                <p className='text-lg'>{point.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center '>
                    <Link onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} to='/about-us' id='solutions' className='bg-main text-white z-10 px-4 py-2 '>
                    DISCOVER CONFAB
                    </Link>
                </div>
            </WrapperCard>
        </div>
    );
}

export default VM;
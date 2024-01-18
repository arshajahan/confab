import React from 'react'
import WrapperCard from './UI/WrapperCard'
import bulb from '../assets/images/bulb.png'
import expenditure from '../assets/images/expenditure.png'
import nooil from '../assets/images/nooil.png'
import zero from '../assets/images/zero.png'
import dots from '../assets/images/dots.svg'

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
            <WrapperCard className='  py-14 grid gap-12 '
            >
                <img
                    className=' opacity-10 absolute top-0 left-0 w-full h-full object-cover z-0'
                    src={dots}
                />
                <h2 className='text-blue-900 font-bold text-xl lg:text-5xl text-center'>
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
                    <button className='bg-blue-950 text-white px-6 py-4 '>
                    DISCOVER CONFAB
                    </button>
                </div>
            </WrapperCard>
        </div>
    );
}

export default VM;
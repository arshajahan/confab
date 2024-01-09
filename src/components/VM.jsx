import React from 'react'
import WrapperCard from './UI/WrapperCard'
import bulb from '../assets/images/bulb.png'
import expenditure from '../assets/images/expenditure.png'
import nooil from '../assets/images/nooil.png'
import zero from '../assets/images/zero.png'

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
            count: '22+',
            title: 'International Locations'
        },
    ];

    return (
        <div>
            <WrapperCard className='py-12 grid gap-12 '>
                <h2 className='text-blue-900 font-bold text-4xl text-center'>
                    Engineering - Driven staffing for a sustainable future
                </h2>
                <div className=' flex flex-wrap  gap-4 justify-center w-full'>
                    {points.map((point) => (
                        <div key={point.id} className='flex basis-[250px] items-center justify-between shadow-lg p-4 gap-2 flex-col text-center'>
                            <img src={point.image} className='w-20 h-20' alt={point.title} />
                            <span className='text-3xl font-bold'>{point.count}</span>
                            <p className=' text-xl'>{point.title}</p>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center '>
                    <button className='bg-blue-950 text-white px-4 py-2 '>
                    DISCOVER CONFAB
                    </button>
                </div>
            </WrapperCard>
        </div>
    );
}

export default VM;
import React from 'react'
import WrapperCard from './UI/WrapperCard'
import dots from '../assets/images/dots.svg'
import architect from '../assets/images/architect.png'
import engineering from '../assets/images/engineering.png'
import healthcare from '../assets/images/healthcare.png'
import healthydrink from '../assets/images/healthy-drink.png'
import logistics from '../assets/images/logistics.png'
import oilpump from '../assets/images/oil-pump.png'
import touch from '../assets/images/touch.png'
import utilities from '../assets/images/utilities.png'

function Sectors() {
  return (
    <div className='relative'>
        <WrapperCard className=' '>
            <img
                className=' opacity-15 absolute top-0 left-0 w-full h-full object-cover z-0'
                src={dots}
            />
            <div className='py-8'>
            <h2 className='text-blue-900 font-bold text-4xl text-center'>
                Sectors
            </h2>
            <div class="flex flex-wrap mt-8">

  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 ">
    <div class="bg-blue-500 p-4 rounded-lg text-center">
      <img src={architect} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">Construction</p>
    </div>
  </div>

 
  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
    <div class="bg-green-500 p-4 rounded-lg text-center">
        <img src={oilpump} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">Oil & Gas</p>
    </div>
  </div>

 
  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
    <div class="bg-red-500 p-4 rounded-lg text-center">
    <img src={touch} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">Technology</p>
    </div>
  </div>


  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
    <div class="bg-yellow-500 p-4 rounded-lg text-center">
    <img src={engineering} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">Engineering</p>
    </div>
  </div>

  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
    <div class="bg-purple-500 p-4 rounded-lg text-center">
    <img src={logistics} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">Logistics & Transportation</p>
    </div>
  </div>

  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
    <div class="bg-orange-500 p-4 rounded-lg text-center">
    <img src={healthydrink} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">F & B</p>
    </div>
  </div>

  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
    <div class="bg-pink-500 p-4 rounded-lg text-center">
    <img src={healthcare} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">Healthcare</p>
    </div>
  </div>

  <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
    <div class="bg-teal-500 p-4 rounded-lg text-center">
    <img src={utilities} className=' w-24 h-24'/>
      <p class="text-white mt-6 text-sm font-semibold">Utilities</p>
    </div>
  </div>
</div>

            </div>
        </WrapperCard>
    </div>

  )
}

export default Sectors
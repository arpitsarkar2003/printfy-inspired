import React from 'react'

function Section1() {
  return (
    <div className='flex md:flex-row flex-col md:space-x-5 space-y-5 md:space-y-0 items-center justify-center max-w-5xl mx-auto'>
      <div className='flex flex-col items-start space-y-5 p-10 md:p-0 '>
        <img src='https://printify.com/pfh/assets/legacy/higher-profits.svg' className=' w-[100px]'/>

        <h1 className='text-xl font-bold text-gray-800'>Higher Profits</h1>

        <p className='text-sm w-3/4'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
      </div>

      <div className='flex flex-col items-start space-y-5 p-10 md:p-0'>
        <img src='https://printify.com/pfh/assets/legacy/robust-scaling.svg' className=' w-[100px]' />

        <h1 className='text-xl font-bold text-gray-800'>Robust Scaling</h1>

        <p className='text-sm w-3/4'>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
      </div>

      <div className='flex flex-col items-start space-y-5 p-10 md:p-0'>
        <img src='https://printify.com/pfh/assets/legacy/best-selection.svg' className=' w-[100px]' />

        <h1 className='text-xl font-bold text-gray-800'>Best Selection</h1>

        <p className='text-sm w-3/4'>With 900+ products and top quality brands, you can choose the best products for your business.</p>
      </div>
    </div>
  )
}

export default Section1
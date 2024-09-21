import React from 'react'

function Section2() {
  return (
    <div className='bg-[#f7f7f7] mt-32 flex flex-col items-center'>
      <div>
        <img src='/banner.png'/>
      </div>

      <div className='py-20 flex items-center justify-between max-w-6xl mx-[100px]'>
        <div className='flex flex-col items-start space-y-5 w-[40vw]'>
          <img src='https://printify.com/pfh/assets/legacy/custom-products.png' className=' w-[150px]' />

          <div>
            <h1 className='text-xl font-bold text-[#20c45c] uppercase'>create</h1>
            <h1 className='text-xl font-bold text-gray-800'>custom products</h1>
          </div>

          <p className='text-sm w-3/4'>Easily add your designs to a wide range of products using our free tools</p>
        </div>

       <div className='flex flex-col items-start space-y-5 w-[40vw]'>
          <img src='https://printify.com/pfh/assets/legacy/custom-products.png' className=' w-[150px]' />

          <div>
            <h1 className='text-xl font-bold text-[#20c45c] uppercase'>SELL</h1>
            <h1 className='text-xl font-bold text-gray-800'>on your terms</h1>
          </div>

          <p className='text-sm w-3/4'>You choose the products, sale price, and where to sell</p>
        </div>

        <div className='flex flex-col items-start space-y-5 w-[40vw]'>
          <img src='https://printify.com/pfh/assets/legacy/fullfillment.png' className=' w-[150px]' />

          <div>
            <h1 className='text-xl font-bold text-[#20c45c] uppercase'>WE HANDLE</h1>
            <h1 className='text-xl font-bold text-gray-800'>fulfillment</h1>
          </div>


          <p className='text-sm w-3/4'>Once an order is placed, we automatically handle all the printing and delivery logistics</p>
        </div>
      </div>
    </div>
  )
}

export default Section2
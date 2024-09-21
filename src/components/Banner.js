import React from 'react'

function Banner() {
  return (
    <div className='max-w-5xl mx-auto bg-green-200 rounded-2xl relative h-[144px]'>
        <div className='flex h-full items-center justify-between mx-24 group'>
            <p className='text-xl font-bold w-2/5 text-[#206e3d]'>Are you a large business looking for custom solutions?</p>
            <button className='border px-5 py-1 text-sm font-semibold text-gray-900/90 z-50 bg-white hover:text-[#20c45c] transition duration-200'>Talk to sales</button>
        </div>
        <div className=''>
            <img src='https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg' className='absolute right-0 top-0 rounded-2xl z-20 ' />
        </div>
    </div>
  )
}

export default Banner
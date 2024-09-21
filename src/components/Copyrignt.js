import React from 'react'
import { Link } from 'react-router-dom'

function Copyrignt() {
    return (
        <div className='bg-[#f8f6f6] flex flex-col pt-10 pb-8 justify-center items-center'>
            <ul className='flex gap-4'>
                <Link><li className='hover:text-[#20c45c] font-semibold text-[12px] text-gray-900/50'>Intellectual Property Policy</li></Link>
                <Link><li className='hover:text-[#20c45c] font-semibold text-[12px] text-gray-900/50'>Terms of Service</li></Link>
                <Link><li className='hover:text-[#20c45c] font-semibold text-[12px] text-gray-900/50'>Privacy Policy</li></Link>
                <Link><li className='hover:text-[#20c45c] font-semibold text-[12px] text-gray-900/50'>Security</li></Link>
            </ul>
            <p className='text-[12px] pt-4'>
                © 2024 Printify, Inc. All rights reserved.
            </p>
        </div>
    )
}

export default Copyrignt
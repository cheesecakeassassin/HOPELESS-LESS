import React from 'react'
import { Link } from 'react-router-dom'
import address from '../assets/svgs/Address.svg'

function Carousel() {
    return (
        <div className='bg-[#403E6ED9] w-screen h-96 flex flex-col items-center text-white font-bold overflow-hidden'>
            <div className='text-5xl py-7'>HOPELESS-LESS</div>
            <Link to='/browse'>
                <div className='rounded-xl h-48 w-[450px] text-3xl my-4 px-5 bg-[#CC656C]'>
                    <div className='text-center pt-7'>Find nearest help based on the location</div>
                    <div className='flex justify-center pt-3'>
                        <img height={50} width={50} src={address} alt='location icon' />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Carousel

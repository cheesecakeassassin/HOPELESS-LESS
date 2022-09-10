import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../assets/svgs/user.svg'
import allhelp from '../assets/svgs/allhelp.svg'

function Nav() {
    const [displayState, setDisplayState] = useState(false)

    return (
        <div className='bg-gradient-to-r from-[#A4A8F2] to-[#F5BFC5]'>
            <div className='grid grid-cols-5 text-xl font-medium py-1'>
                <div className='col-span-1 flex items-center justify-start pl-6'>
                    <Link to='/'>
                        <img height={40} width={40} src={allhelp} alt='AllHelp icon' />
                    </Link>
                </div>
                <div className='flex justify-center col-start-2 col-end-4 items-center'>
                    <div className='pr-6'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='px-6'>
                        <Link to='/Browse'>Browse</Link>
                    </div>
                    <div className='px-6'>
                        <Link to='/Request'>Request</Link>
                    </div>
                    <div className='pl-6'>
                        <Link to='/About'>About</Link>
                    </div>
                </div>

                <div className='flex justify-end col-span-2 items-center'>
                    <div className='pr-3'>
                        <Link to='/SignIn'>Sign In</Link>
                    </div>
                    <div className='pr-6'>
                        <img src={user} alt='Sign in icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav

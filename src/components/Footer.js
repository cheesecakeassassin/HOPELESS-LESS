import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/svgs/Facebook.svg'
import instagram from '../assets/svgs/Instagram.svg'
import twitter from '../assets/svgs/Twitter.svg'
import allhelp from '../assets/svgs/allhelp.svg'

function Footer() {
    return (
        <div className='bg-[#A897F1] grid grid-cols-4 font-medium pt-12'>
            <div className='pl-6'>
                <div className='flex mt-12'>
                    <a href='https://facebook.com'>
                        <img src={facebook} alt='Facebook' />
                    </a>
                    <a href='https://instagram.com'>
                        <img src={instagram} alt='Instagram' />
                    </a>
                    <a href='https://twitter.com'>
                        <img src={twitter} alt='Twitter' />
                    </a>
                </div>
                <div className='mt-4'>AllHelp &copy;2022</div>
            </div>
            <div className='mb-8 text-xl'>
                <div className='py-1'>
                    <Link to='/'>Home</Link>
                </div>
                <div className='py-1'>
                    <Link to='/Browse'>Browse</Link>
                </div>
                <div className='py-1'>
                    <Link to='/Request'>Request</Link>
                </div>
                <div className='py-1'>
                    <Link to='/About'>About</Link>
                </div>
                <div className='py-1'>
                    <Link to='/SignIn'>Sign In</Link>
                </div>
            </div>
            <div className='col-start-3 col-end-5 flex items-center justify-end pr-12 pb-10'>
                <Link to='/'>
                    <img height={140} width={140} src={allhelp} alt='AllHelp' />
                </Link>
            </div>
        </div>
    )
}

export default Footer

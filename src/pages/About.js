import React from 'react'

function About() {
    return (
        <div className='overflow-hidden'>
            <div className='bg-[url("./assets/images/background.png")] h-screen w-screen bg-cover bg-no-repeat'>
                <div className='pt-12 pl-16'>
                    <div className='text-7xl font-bold text-[#211C70]'>About Us</div>
                    <div className='pt-6 mr-96 font-medium text-3xl text-[#6B67AA]'>Founded in 2022 at ShellHacks, we are dedicated in getting <span className='font-bold'>YOU</span> the help you truly need! We are dedicated to making your day better :) </div>
                </div>
            </div>
        </div>
    )
}

export default About

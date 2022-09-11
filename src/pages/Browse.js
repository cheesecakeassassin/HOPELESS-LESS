import React from 'react'

function Browse() {
    return (
        <div className='overflow-hidden'>
            <div className='bg-[url("./assets/images/background.png")] h-screen w-screen bg-cover bg-no-repeat'>
                <div className='absolute z-0 bottom-7 right-20 rounded-3xl bg-[#6DC1DC] w-[1200px] h-[575px]'>
                    <div className='relative z-10 rounded-3xl bg-[#5E93A5] w-[350px] h-[575px]'>
                        <div className='font-medium text-3xl text-white pl-7 pt-8'>Categories</div>
                        <div className='rounded-2xl z-20 bg-[#CDD8DD] w-[307px] h-[200px] mt-5 ml-5 border border-white'></div>
                        <div className='font-medium text-3xl text-white pl-7 pt-8'>Distance</div>
                        <div className='rounded-2xl z-20 bg-[#CDD8DD] w-[307px] h-[135px] mt-5 ml-5 border border-white'></div>
                        <button className='rounded-xl z-50 bg-[#CDD8DD] font-medium text-xl text-slate-700 h-8 w-20 border border-white ml-60 mt-4' type='submit'>Save</button>
                    </div>
                </div>
                {/* <div className='relative z-10 grid grid-cols-6'>
                    <div className='col-start-3 col-end-6'>
                        <div className='h-72 w-72 bg-slate-500'></div>
                        <div className='h-72 w-72 bg-slate-500'></div>
                        <div className='h-72 w-72 bg-slate-500'></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Browse

import React, { useState } from 'react'
import _ from 'lodash'
import Card from '../components/Card'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

function Browse(props) {
    const [sliderState, setSliderState] = useState(0)

    const handleChange = (event) => {
        setSliderState(event)
    }

    return (
        <div className='overflow-hidden'>
            <div className='bg-[url("./assets/images/background.png")] h-screen w-screen bg-cover bg-no-repeat'>
                <div className='absolute flex z-0 bottom-7 right-20 rounded-3xl bg-[#6DC1DC] w-[1200px] h-[575px]'>
                    <div className='relative z-10 rounded-3xl bg-[#5E93A5] w-[350px] h-[575px]'>
                        <div className='font-medium text-3xl text-white pl-7 pt-8'>Categories</div>
                        <div className='rounded-2xl z-20 bg-[#CDD8DD] w-[300px] h-[200px] mt-5 ml-5 border border-white'>
                            <div className='flex items-center mx-3 mb-2 mt-1.5'>
                                <input id='checkbox1' type='checkbox' name='checkbox' className='hidden' />
                                <label htmlFor='checkbox1' className='flex items-center cursor-pointer'>
                                    <span className='w-4 h-4 inline-block mr-2 rounded border border-black bg-white'></span>
                                    Donation
                                </label>
                            </div>

                            <div className='flex items-center mx-3 mb-2'>
                                <input id='checkbox2' type='checkbox' name='checkbox' className='hidden' />
                                <label htmlFor='checkbox2' className='flex items-center cursor-pointer'>
                                    <span className='w-4 h-4 inline-block mr-2 rounded border border-black bg-white'></span>
                                    Community Service
                                </label>
                            </div>

                            <div className='flex items-center mx-3 mb-2'>
                                <input id='checkbox3' type='checkbox' name='checkbox' className='hidden' />
                                <label htmlFor='checkbox3' className='flex items-center cursor-pointer'>
                                    <span className='w-4 h-4 inline-block mr-2 rounded border border-black bg-white'></span>
                                    Animal Adoption
                                </label>
                            </div>

                            <div className='flex items-center mx-3 mb-2'>
                                <input id='checkbox4' type='checkbox' name='checkbox' className='hidden' />
                                <label htmlFor='checkbox4' className='flex items-center cursor-pointer'>
                                    <span className='w-4 h-4 inline-block mr-2 rounded border border-black bg-white'></span>
                                    Tutoring
                                </label>
                            </div>

                            <div className='flex items-center mx-3 mb-2'>
                                <input id='checkbox5' type='checkbox' name='checkbox' className='hidden' />
                                <label htmlFor='checkbox5' className='flex items-center cursor-pointer'>
                                    <span className='w-4 h-4 inline-block mr-2 rounded border border-black bg-white'></span>
                                    Exchange
                                </label>
                            </div>

                            <div className='flex items-center mx-3 mb-2'>
                                <input id='checkbox6' type='checkbox' name='checkbox' className='hidden' />
                                <label htmlFor='checkbox6' className='flex items-center cursor-pointer'>
                                    <span className='w-4 h-4 inline-block mr-2 rounded border border-black bg-white'></span>
                                    Accommodation
                                </label>
                            </div>
                        </div>
                        <div className='font-medium text-3xl text-white pl-7 pt-8'>Distance</div>
                        <div className='rounded-2xl z-20 bg-[#CDD8DD] w-[300px] h-[135px] mt-5 ml-5 border border-white'>
                            <div className='text-left text-sm pl-3 py-1'>Zip Code</div>
                            <input
                                className='rounded-md h-7 bg-white w-[280px] ml-2 mb-2 px-2'
                                name='zipcode'
                                type='text'
                                id='zipcode'
                            />
                            <div className='text-left text-sm pl-3 py-1'>Radius(mi)</div>
                            <div className='mx-4'>
                                <Slider
                                    marks={{
                                        0: '0',
                                        5: '5',
                                        10: '10',
                                        15: '15',
                                        25: '25',
                                        50: '50',
                                        100: '100',
                                    }}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button
                            className='rounded-xl z-50 bg-[#CDD8DD] font-medium text-xl text-slate-700 mr-4 h-8 w-20 border border-white ml-60 mt-4'
                            type='submit'
                        >
                            Save
                        </button>
                    </div>
                    <div className='flex flex-wrap justify-center content-center items-center z-10'>
                        {_.map(props.services, service => (
                            <Card key={service.title} image={service.image} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browse

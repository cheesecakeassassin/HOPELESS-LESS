import React from 'react'

function Request(props) {
    return (
        <div className='overflow-hidden'>
            <div className='bg-[url("./assets/images/background.png")] h-screen w-screen bg-cover bg-no-repeat'>
                <div className='absolute flex z-0 bottom-7 right-20 rounded-3xl bg-[#403E6ED9] w-[1200px] h-[575px]'>
                    <div className='flex flex-col pt-9 pb-2 ml-12'>
                        <div className='text-5xl font-medium text-white'>Request</div>

                        <label className='text-white text-lg pt-12' htmlFor='options'>
                            Select a service:
                        </label>
                        <select className='rounded-md mt-2 h-7' name='options' id='options'>
                            <option value='donation'>Donation</option>
                            <option value='communityService'>Community Service</option>
                            <option value='animalAdoption'>Animal Adoption</option>
                            <option value='tutoring'>Tutoring</option>
                            <option value='exchange'>Exchange</option>
                            <option value='accommodation'>Accommodation</option>
                        </select>

                        <label className='text-white text-lg pt-10' htmlFor='options'>
                            Enter your Zip Code:
                        </label>
                        <input
                            className='rounded-md h-7 bg-white w-[280px] mt-2 px-2'
                            name='zipcode'
                            type='text'
                            id='zipcode'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request

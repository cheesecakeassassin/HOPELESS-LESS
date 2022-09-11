import React, { useState } from 'react'

function Request() {
    const [selected, setSelected] = useState('donation')

    const handleChange = (event) => {
        console.log(event.target.value)
        setSelected(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you! Your response has been saved, check your email :)")
    }

    return (
        <div className='overflow-hidden'>
            <div className='bg-[url("./assets/images/background.png")] h-screen w-screen bg-cover bg-no-repeat'>
                <div className='absolute left-[470px] bottom-8 flex justify-center z-0 rounded-3xl bg-[#403E6ED9] w-[500px] h-[575px]'>
                    <div className='flex flex-col pt-9 pb-2 ml-12'>
                        <div className='text-6xl pr-12 font-medium text-white text-center'>Request</div>

                        <label className='text-white text-lg pt-5' htmlFor='options'>
                            Select a service:
                        </label>
                        <select
                            className='rounded-md mt-2 h-7 w-[300px]'
                            value={selected}
                            onChange={handleChange}
                            name='options'
                            id='options'
                        >
                            <option value='donation'>Donation</option>
                            <option value='communityService'>Community Service</option>
                            <option value='animalAdoption'>Animal Adoption</option>
                            <option value='tutoring'>Tutoring</option>
                            <option value='exchange'>Exchange</option>
                            <option value='accommodation'>Accommodation</option>
                        </select>

                        <label className='text-white text-lg pt-6' htmlFor='options'>
                            Enter your Zip Code:
                        </label>
                        <input
                            className='rounded-md h-7 bg-white w-[300px] mt-2 px-2'
                            name='zipcode'
                            type='text'
                            id='zipcode'
                        />
                        <div className='flex flex-col justify-center items-center align-center mt-6'>
                            <img className='rounded-2xl' height={280} width={280} src={`/images/${selected}.png`} alt={selected} />
                            <button onClick={handleSubmit} className='rounded-lg mt-4 bg-[#74D2A5] w-24 h-8 text-lg text-slate-700 hover:rounded-lg' type='submit'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request

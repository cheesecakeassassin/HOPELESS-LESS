import React, { useState } from 'react'

function SignIn() {
    const [formState, setFormState] = useState({ email: '', password: '' })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
      };

    return (
        <div className='text-2xl font-medium px-8'>
            <div className='h-96 w-96 rounded-xl bg-orange-300/[.98] mx-10'>
                <div className='text-center py-6'>Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center'>
                        <div className='text-sm'>Email</div>
                        <input
                            className='rounded-lg bg-[#D2747E] px-4'
                            name='email'
                            type='text'
                            id='email'
                            onChange={handleChange}
                            required
                        />
                        <div className='text-sm pt-7'>Password</div>
                        <input
                            className='rounded-lg bg-[#D2747E] px-4'
                            name='password'
                            type='password'
                            id='pwd'
                            onChange={handleChange}
                            required
                        />
                        <button className='rounded-lg mt-20 bg-[#74D2A5] w-24 h-8 text-lg text-white' type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn

import React, { useState } from 'react'
import { firestore } from '../firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, setDoc, doc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";




const auth = getAuth();
const ref_users = collection(firestore, 'users')
function SignIn() {
    const navigate = useNavigate()
   
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
        // Sign up with email and password
        const { email, password } = formState

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               
                // Signed in 
                const user = userCredential.user;
                // Add user document to firestore
               setDoc(doc(firestore, "users", user.uid), {
                    email: user.email,
                    uid: user.uid,
              }).then(() => {
                    // Navigate to home page;
                
                // set
                navigate("/profile")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            }
            );
    })}

    return (
        <div className='text-2xl font-medium px-8'>
            <div className='h-96 w-96 rounded-xl bg-[#403E6ED9]/[.98] mx-10'>
                <div className='text-center py-6 text-white'>Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center'>
                        <div className='text-sm text-white mb-1'>Email</div>
                        <input
                            className='rounded-lg bg-[#A897F1] px-4'
                            name='email'
                            type='email'
                            id='email'
                            onChange={handleChange}
                            required
                        />
                        <div className='text-sm pt-7 mb-1 text-white'>Password</div>
                        <input
                            className='rounded-lg bg-[#A897F1] px-4'
                            name='password'
                            type='password'
                            id='pwd'
                            onChange={handleChange}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                            required
                        />
                        <button className='rounded-lg mt-20 bg-[#74D2A5] w-24 h-8 text-lg text-slate-700 hover:rounded-lg' type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default SignIn

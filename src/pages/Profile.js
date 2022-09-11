import React from "react";
import { useState } from 'react';
import { getAuth, } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import {useNavigate} from 'react-router-dom';
// Profile page for user to add their information with a form


function Profile() {
    const  auth = getAuth();
    const navigate = useNavigate();
    const firestore = getFirestore();
    //determine if user is signed in
    const [user, setUser] = useState(auth.currentUser);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //add user info to firestore

        var user_ref = doc(firestore, "users", user.uid);
        setDoc(user_ref, {
            "first_name": inputs.first_name,
            "last_name": inputs.last_name,
            "zip_code": inputs.zip_code,
        }, { merge: true }).then(() => {
            console.log("Document successfully written!");
            //navigate to home page
            navigate("/browse");
            
        })


        //navigate to home page
    

        //loop through inputs and console log them
       
    }
    return (
        // div for the form with a submit button and 50 px padding on the left and right side
        <div className="overflow-hidden">
            <div className='bg-[url("./assets/images/background.png")] h-screen w-screen bg-cover bg-no-repeat'>
                <div className="font-medium px-8 p-5">
                    <h1 className="text-4xl mb-5">Profile</h1>

                    <form className="h-500"  onSubmit={handleSubmit}>
                        {/* table with two columns */}
                        <table className="">
                            <tr>
                                {/* first column */}
                                <td className="">
                                    <label>First Name: </label>
                                </td>
                                {/* second column */}
                                <td className="">
                                    <input required
                                        className="square border border-4 rounded ml-3 w-60"
                                        type="text"
                                        name="first_name"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="">
                                    {" "}
                                    <label>Last Name:</label>
                                </td>
                                <td className="">
                                    <input required
                                        className="square border border-4 rounded ml-3 mt-3 w-60"
                                        type="text"
                                        name="last_name"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className="">
                                    <label>Zip Code: </label>{" "}
                                </td>
                                <td className="">
                                    <input
                                        className="square border border-4 rounded ml-3 mt-3 w-60"
                                        type="text"
                                        name="zip_code"
                                        onChange={handleChange}
                                    />
                                </td>
                            </tr>
                                    <br/>
                            <tr>

                                <td>
                                    <label>Gender: </label>
                                </td>
                                <td>
                                    <select className="rounded-md border border-black" onChange={handleChange} name="gender">
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </td>
                                
                            </tr>
                        </table>
                        <button className="" style={{background:"#6DC1DC", borderRadius:"40px", padding:"10px 15px  "}}  type="submit">Submit</button>


                    </form>
                </div>
            </div>
        </div>
    );
}
export default Profile;

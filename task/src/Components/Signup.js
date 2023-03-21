import { async } from '@firebase/util';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import googleIcon from "../Assests/images/googleIcon.png"
import {useAuth} from "../contextapi/AuthContext"
function Signup() {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [agree,setAgree] = useState("");
    const [loading,setLoading] = useState("");
    const [error,setError] = useState("");
    const {signup} = useAuth();
    const history = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try{
            setError("");
            setLoading(true);
            await signup(email,password,username);
            history("/dashboard")

        } catch(err){
            console.log(err);
            setLoading(false);
            setError("Failed to create an account")
        }

    }

    return (
        <div>
            <div className="flex justify-center md:flex-none">
                <div className="text-center">
                    <h1 className="font-semibold text-2xl mb-3">Getting Started</h1>
                    <h4 className="text_Subtitles text-1xl">Create an account to continue</h4>

                    <div className="flex p-2 mr-4">
                        <a href="/" className="flex m-2 ml-4 bg-gray-300 rounded-lg p-3">
                            <img
                                className="mr-2 fa-brands fa-google"
                                src={googleIcon}
                                alt=""
                            />
                            <h3 className="text_Subtitles">Sign Up With Google</h3>
                        </a>
                        <a href="/" className="flex m-2 ml-4 bg-gray-300 rounded-lg p-3">
                            <i className="mr-2 mt-1 fa-brands fa-apple"></i>
                            <h3 className="">Sign Up With Apple</h3>
                        </a>
                    </div>

                    <div className="flex items-center py-4">
                        <div className="flex-grow h-px bg-gray-400"></div>
                        <span className="flex-shrink text-2xl text-gray-500 px-4 font-light"
                        >Or</span
                        >
                        <div className="flex-grow h-px bg-gray-400"></div>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="textInput text_Subtitles mb-8">
                            <i className="ml-3 fa-solid fa-at"></i>
                            <input 
                            type="email" 
                            placeholder="Your Email"
                            value={email}
                            onChange = {(e)=>setEmail(e.target.value)}
                            required
                            />
                        </div>

                        <div className="textInput text_Subtitles mb-8">
                            <i className="ml-3 fa-sharp fa-solid fa-face-smile"></i>
                            <input type="name" placeholder="Your Name" 
                            value={username}
                            onChange = {(e)=>setUsername(e.target.value)}
                            required
                            />
                        </div>

                        <div className="textInput text_Subtitles mb-8">
                            <i className="ml-3 fa-solid fa-lock"></i>
                            <input type="password" placeholder="Create Password" 
                            value={password}
                            onChange = {(e)=>setPassword(e.target.value)}
                            required
                            />
                        </div>

                        <div>
                            <input type="checkbox" className="p-2" value={agree}
                            onChange = {(e)=>setAgree(e.target.value)}
                            required />
                            <span className='ml-3'>I agree to the Terms & Conditions</span>
                        </div>

                        <div>
                            <button disabled={loading} className=" mt-2 bg-blue-700 w-full font-semibold text-white h-12 rounded-lg" type="submit" >Sign Up</button>
                        </div>

                        {error && <p className="error">{error}</p>}
                    </form>

                    <div className=" mt-2 ml-5 flex">
                        <h3 className="text_Subtitles"> Already Have an account?</h3>
                        <Link to='/signin' className="ml-3 text-blue-700" >Sign In</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup

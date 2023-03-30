import React from 'react';
import googleIcon from "../Assests/images/googleIcon.png";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { useLoginMutation } from "../features/auth/authApi";
import Navbar from '../components/Navbar';

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [agree, setAgree] = useState(false);

    
    const [login, { data, isLoading, error: responseError }] =
        useLoginMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (responseError?.data) {
            setError(responseError.data);
        }
        if (data?.accessToken && data?.user) {
            navigate("/dashboard");
        }
    }, [data, responseError, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        login({
            email,
            password,
        });
    };

    return (
        <div>
            {/* <!-- Signup Section  --> */}
            <div className="mt-8 flex justify-center">
                <div className="text-center">
                    <h1 className="font-semibold text-2xl mb-3">Sign In</h1>
                    <h4 className="text_Subtitles text-1xl">
                        Welcome back, you've been missed!
                    </h4>
                    {/* <!-- Social Sign in  --> */}
                    <div className="flex p-2 mr-4">
                        <a href="/" className="flex m-2 ml- bg-gray-300 rounded-lg p-3">
                            <img className='mr-2' src={googleIcon} alt="" />
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
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="textInput text_Subtitles mb-8">
                            <i className="ml-3 fa-solid fa-lock"></i>
                            <input type="password" placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div>
                            <label>
                            <input type="checkbox" className="p-2" value={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                required />
                                <span className='ml-2'>Remember Me</span>
                            </label>
                        </div>

                        <div>
                            <button disabled={isLoading} className="mt-2 bg-blue-700 w-full font-semibold text-white h-12 rounded-lg" type="submit" >
                                Sign In
                            </button>
                        </div>
                        {error !== "" && <Error message={error} />}
                    </form>

                    <div className="mt-2 ml-5 flex">
                        <h3 className="ml-2 text_Subtitles">Do not Have an account?</h3>
                        <Link to="/signup" className="ml-3 text-blue-700">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin

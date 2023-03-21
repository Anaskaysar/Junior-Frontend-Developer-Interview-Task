import React from 'react'
import { Link } from 'react-router-dom'
import googleIcon from "../Assests/images/googleIcon.png"

function Signup() {
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

                    <div className="textInput text_Subtitles mb-8">
                        <i className="ml-3 fa-solid fa-at"></i>
                        <input type="password" placeholder="Your Email" />
                    </div>

                    <div className="textInput text_Subtitles mb-8">
                        <i className="ml-3 fa-sharp fa-solid fa-face-smile"></i>
                        <input type="password" placeholder="Your Name" />
                    </div>

                    <div className="textInput text_Subtitles mb-8">
                        <i className="ml-3 fa-solid fa-lock"></i>
                        <input type="password" placeholder="Create Password" />
                    </div>

                    <div>
                        <input type="checkbox" className="" />
                        <span>I agree to the Terms & Conditions</span>
                    </div>

                    <div>
                        <button className=" mt-2 bg-blue-700 w-full font-semibold text-white h-12 rounded-lg">Sign Up</button>
                    </div>

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

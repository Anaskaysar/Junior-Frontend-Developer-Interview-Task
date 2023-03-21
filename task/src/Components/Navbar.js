import React from 'react'
import logo from "../Assests/images/logo.png"
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="ml-8 mt- 3 navbar-start">
                <Link to='/'><img src={logo} alt=""/></Link>
            </div>

            <div className="mr-8 mt-3 navbar-end">
                <button className="flex bg-gray-300 rounded-lg p-3 text_Subtitles">
                    <span>English (UK) </span>
                    <i className="ml-2 mt-1 fa-solid fa-chevron-down"></i>
                </button>
            </div>
        </div>
    )
}

export default Navbar;

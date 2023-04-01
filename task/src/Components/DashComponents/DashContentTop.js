import React from 'react'
import { useDispatch } from 'react-redux'
import {userLoggedOut } from '../../features/auth/authSlice';


function DashContentTop() {

    const dispatch = useDispatch();

    const logout = () =>{
        dispatch(userLoggedOut())
        localStorage.clear();

    }
    const avatar = "https://reqres.in/img/faces/7-image.jpg";
    
    return (
        <div className="mt-8">
            <div className="flex justify-between">
                <div className="border rounded-2xl w-100 overflow-hidden flex">
                    <input type="text" className="px-4 py-2" placeholder="Search..." />
                    <button className="flex items-center justify-center px-4">
                        <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                    </button>
                </div>

                <div className='mr-8 w-100'>
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={avatar} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">    
                            <li>
                               <span className='cursor-pointer' onClick={logout}>Log Out</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DashContentTop

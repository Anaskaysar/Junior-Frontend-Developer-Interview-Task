import React from 'react'
import { useAuth } from '../../contextapi/AuthContext';

function DashContentTop() {
    const avatar = "https://reqres.in/img/faces/7-image.jpg"

    const { currentUser, signout } = useAuth();
    console.log(currentUser)


    return (
        <>
            <div class="mt-3 bg-base-100">
                <div class="flex gap-10 justify-items-end">
                    <div class="form-control items-center">
                        <input type="text" placeholder="Search" class="input input-bordered" />
                    </div>
                    <div className='gap-10'>

                        <button class="btn btn-ghost btn-circle">
                            <div class="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span class="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button>
                        {currentUser && <div class="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div class="w-10 rounded-full">
                                    <img src={avatar} />
                                </div>
                            </label>
                            <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>{currentUser.displayName} </li>
                                <button type='submit' onClick={signout}  >Logout</button>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div></>
    )
}

export default DashContentTop

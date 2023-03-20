import React from 'react'
import DashNav from './DashNav'

function DashHome() {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div className="navbar bg-base-100">
          <div className="p-5 navbar-center">
            <div className=" p-3 textInput text_Subtitles">
              <input type="text" placeholder="Search" />
              <i className="fa-sharp fa-solid fa-magnifying-glass pr-5"></i>
            </div>
          </div>

          <div className="mr-8 mt-3 navbar-end">
            <button class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>

            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://reqres.in/img/faces/7-image.jpg" />
                </div>
              </label>
              <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-r-4">
        <DashNav />
      </div>
    </div>
  )
}

export default DashHome

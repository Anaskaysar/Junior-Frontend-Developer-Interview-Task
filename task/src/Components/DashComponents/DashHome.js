import React from 'react'
import DashContentTop from './DashContentTop'
import DashSideNav from './DashSideNav'

function DashHome() {
  return (
    <div>
      <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="ml-2 drawer-content flex flex-col">
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <DashContentTop /> 
                <h1 className='ml-3 mt-5 text-center text-3xl font-bold'>Welcome To The Dashboard</h1>                  
            </div>
            <div className="drawer-side">
                <DashSideNav />
            </div>
        </div>
    </div>
      
    
  )
}

export default DashHome

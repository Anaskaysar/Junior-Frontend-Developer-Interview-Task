import React from 'react'
import DashSideNav from '../components/DashComponents/DashSideNav'
import DashContentTop from '../components/DashComponents/DashContentTop'
import { Outlet } from 'react-router-dom';
import DashUsers from '../components/DashComponents/DashUsers';

function Dashboard() {
  return (
    <div>
      <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="ml-2 drawer-content flex flex-col">
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <DashContentTop /> 
                            
            </div>
            <div className="drawer-side">
                <DashSideNav />
            </div>
        </div>
    </div>
  )
}

export default Dashboard

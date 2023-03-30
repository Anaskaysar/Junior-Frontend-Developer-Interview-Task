import React from 'react'
import DashSideNav from '../components/DashComponents/DashSideNav'
import DashContentTop from '../components/DashComponents/DashContentTop'
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

            <div class="ml-2 drawer-content flex flex-col">
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <DashContentTop />    
                <Outlet/>            
            </div>
            <div class="drawer-side">
                <DashSideNav />
            </div>
        </div>
    </div>
  )
}

export default Dashboard

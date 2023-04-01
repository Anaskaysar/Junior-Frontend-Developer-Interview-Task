import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assests/images/logo.png"
import menu from "../../Assests/Icons/menu_icon.svg"
import user from "../../Assests/Icons/users_icon.svg"
import sales from "../../Assests/Icons/sales_invoice.svg"


function DashSideNav() {
  return (
    <div className='border-r-4'>
      <label for="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 bg-base-100 text-base-content">
        {/* -- Sidebar content here */}
        <li>
          <Link to='/dashboard'>
            <img src={logo} alt="" />
          </Link>
        </li>
        <li>
          <Link to='/dashboard'>
            <img src={menu} alt="" />
            Dashboard
          </Link>
        </li>

        <li>
          <Link to='/dashboard/users'>
            <img src={user} alt="" />
            Users
          </Link>
        </li>
        <li>
          <Link to='/dashboard/sales'>
            <img src={sales} alt="" />
            Sales
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DashSideNav;

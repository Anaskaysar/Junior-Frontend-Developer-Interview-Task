import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Assests/images/logo.png"
import menu from "../../Assests/Icons/menu_icon.svg"
import user from "../../Assests/Icons/users_icon.svg"
import sales from "../../Assests/Icons/sales_invoice.svg"


function DashNav() {
  return (
    <div>

      <div>
        <ul className="menu bg-base-100 w-56 p-2 rounded-box">

          <div className="ml-8 navbar-start">
            <img src={logo} alt="" />
          </div>

          <li>
            <i className="fa-light fa-grid-2-plus"></i>
            <Link>
              <img src={menu} alt="" />
              Dashboard
            </Link>
          </li>
          <li>
            <i className="fa-light fa-grid-2-plus"></i>
            <Link>
              <img src={user} alt="" />
              Users
            </Link>
          </li>
          <li>
            <i className="fa-light fa-grid-2-plus"></i>
            <Link>
              <img src={sales} alt="" />
              Sales
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DashNav

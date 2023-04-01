import React, { useEffect, useState } from 'react'
import DashContentTop from './DashContentTop';
import DashSideNav from './DashSideNav';
import Pagination from './Pagination';


export default function DashUsers() {

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerpage, setuserPerpage] = useState(5);



  useEffect(() => {
    //Fetching Data From Api
    fetch(`https://reqres.in/api/users/`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.data);
      })

  }, [])

  const lastUserIndex = currentPage * userPerpage;
  const firstUserIndex = lastUserIndex - userPerpage;
  const currentUser = users.slice(firstUserIndex, lastUserIndex)

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="ml-2 drawer-content flex flex-col">
          <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          <DashContentTop />

          <div>
            <h1 className='m-4 font-bold'>Users List</h1>
            <div className="overflow-x-auto m-2">
              <table className="table w-full">
                {/* <!-- Table head --> */}
                <thead className='bg-slate-300'>
                  <tr >
                    <th>#ID</th>
                    <th>User</th>
                    <th>Email</th>
                    <th>Options</th>
                  </tr>
                </thead>
                {/* Table Body  */}
                <tbody>
                  {
                    currentUser.map((user, index) =>
                      <tr key={index}>
                        <th>{user.id}</th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={user.avatar} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold">{user.first_name} {user.last_name}</div>
                            </div>
                          </div>
                        </td>
                        <td>{user.email}</td>
                        <td className='font-bold font'>....</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              <Pagination totalUser={users.length} userPerpage={userPerpage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
          </div>

        </div>
        <div className="drawer-side">
          <DashSideNav />
        </div>
      </div>
    </div>

  )
}

import React, { useEffect, useState } from 'react'


export default function DashUsers() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    //Fetching Data From Api
    fetch(`https://reqres.in/api/users?page=2`)
      .then(res => res.json())
      .then(data => {
        setUsers(data.data);
      })

  }, [])
  return (
    <div>
      <h1 className='font-bold'>Users List</h1>
      <div className="overflow-x-auto m-2">
        <table className="table w-full">
          {/* <!-- Table head --> */}
          <thead>
            <tr>
              <th>#ID</th>
              <th>User</th>
              <th>Email</th>
              <th>Options</th>
            </tr>
          </thead>
          {/* Table Body  */}
          <tbody>
            {
              users.map((user, index) =>
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
        <div className="p-1">
          <button className="btn mr-2 btn-outline">«</button>
          <button className="btn mr-2 btn-outline">2</button>
          <button className="btn mr-2 btn-outline">3</button>
          <button className="btn mr-2 btn-outline">...</button>
          <button className="btn mr-2 btn-outline">10</button>
          <button className="btn mr-2 btn-outline">»</button>
        </div>
      </div>
    </div>
  )
}

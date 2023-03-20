import React from 'react'
import DashNav from './DashNav'
import DashUsers from "./DashUsers"

function DashBody() {
    return (
        <div className='grid grid-cols-2 divide-x'>
            <div>
                <DashNav></DashNav>
            </div>
            <div>
            <DashUsers/>
            </div>
        </div>
    )
}

export default DashBody

import React from 'react'

function Pagination({ totalUser, userPerpage, setCurrentPage, currentPage }) {
    let pages = []

    for (let i = 1; i <= Math.ceil(totalUser / userPerpage); i++) {
        pages.push(i);
    }
    return (
        <div className="p-1">
            <button className="btn mr-2 btn-outline">«</button>
            {pages.map((page, index) => {
                return <>
                    <button className={page == currentPage ? 'btn mr-2 btn-info' : 'btn mr-2 btn-outline'} key={index} onClick={() => setCurrentPage(page)} > {page} </button></>
            })
            }
            <button className="btn mr-2 btn-outline">»</button>
        </div>
    )
}

export default Pagination

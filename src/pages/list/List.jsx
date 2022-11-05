import React from "react"
import "./list.scss"
import { DataTable, Navbar, Sidebar } from "../../components"

function List() {
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <DataTable />
        </div>
      </div>
    </>
  )
}

export default List

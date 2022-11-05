import React from "react"
import "./datatable.scss"
import { DataGrid } from "@mui/x-data-grid"
import { userRows, userColumns } from "./mockdata"
import { Link } from "react-router-dom"

const actionColumns = [
  {
    field: "actions",
    headerName: "Actions",
    width: 160,
    renderCell: () => {
      return (
        <>
          <div className="cellWithActions">
            <Link to="/users/testing" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        </>
      )
    },
  },
]

function DataTable() {
  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          <h1>All Users Info</h1>
          <Link to="/users/new" className="datatableLink">
            Add New User
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={userRows}
          columns={userColumns.concat(actionColumns)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  )
}

export default DataTable

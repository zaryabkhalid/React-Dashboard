import React from "react"
import "./hometable.scss"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import data from "./mockData.js"

function HomeTable() {
  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.id}>
                <TableCell className="tableCell">{d.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={d.img} alt={d.product} className="image" />
                    {d.product}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{d.customer}</TableCell>
                <TableCell className="tableCell">{d.date}</TableCell>
                <TableCell className="tableCell">{d.amount}</TableCell>
                <TableCell className="tableCell">{d.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${d.status}`}>{d.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default HomeTable

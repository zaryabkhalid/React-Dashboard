import {
  MoreVert,
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material"
import React from "react"
import { CircularProgressbar } from "react-circular-progressbar"
import "./featured.scss"
import "react-circular-progressbar/dist/styles.css"

function Featured() {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVert fontSize="small" />
        </div>
        <div className="bottom">
          <div className="featuredChart">
            <CircularProgressbar value={60} text={"60%"} strokeWidth={5} />
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">$420</p>
          <p className="desc">
            Previous transections processing. Last payments may not be included.
          </p>

          <div className="summery">
            <div className="item">
              <div className="itemtitle">Today</div>
              <div className="itemResult negative">
                <ArrowDownwardOutlined fontSize="small" />
                <div className="resultAmount">$3.4k</div>
              </div>
            </div>

            <div className="item">
              <div className="itemtitle">Last Week</div>
              <div className="itemResult positive">
                <ArrowUpwardOutlined fontSize="small" />
                <div className="resultAmount">$6.4k</div>
              </div>
            </div>

            <div className="item">
              <div className="itemtitle">Last Month</div>
              <div className="itemResult positive">
                <ArrowUpwardOutlined fontSize="small" />
                <div className="resultAmount">$18.4k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured

import { Sidebar, Navbar, Chart, HomeTable } from "../../components"
import React from "react"
import "./single.scss"
import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
} from "@mui/icons-material"

function Single() {
  return (
    <>
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />

          <div className="top">
            <div className="left">
              <div className="editButton">Edit</div>
              <h1 className="title">Information</h1>
              <div className="item">
                <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />

                <div className="details">
                  <h2 className="itemTitle">Jane Doe</h2>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">Janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+65 1245 4874</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">Pakistan</span>
                  </div>

                  <div className="detailItem">
                    <span className="itemKey">Social:</span>
                    <span className="itemSocial">
                      <FacebookOutlined fontSize="small" />
                      <Instagram fontSize="small" />
                      <LinkedIn fontSize="small" />
                      <GitHub fontSize="small" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <Chart aspect={4 / 1} title="User Spending (Last 6 Months)" />
            </div>
          </div>

          <div className="bottom">
            <h1 className="title">Last Transections</h1>
            <HomeTable />
          </div>
        </div>
      </div>
    </>
  )
}

export default Single

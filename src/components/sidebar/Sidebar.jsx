import React, { useContext } from "react"
import "./sidebar.scss"
import {
  CategoryOutlined,
  CreditCardOutlined,
  DashboardOutlined,
  PeopleOutlined,
  ProductionQuantityLimitsOutlined,
  LocalShippingOutlined,
  SettingsOutlined,
  AccountCircleOutlined,
  LogoutOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { DarkModeContext } from "../../context/themeContext"

function Sidebar() {
  const { dispatch } = useContext(DarkModeContext)
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.removeItem("user")
    navigate("/")
  }

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <span className="logo">Admin Portel</span>
          </Link>
        </div>

        <div className="sidebar__center">
          <ul>
            <p className="title">MAIN</p>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <li>
                <DashboardOutlined className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>

            <p className="title">LISTS</p>
            <Link to="/users" style={{ textDecoration: "none" }}>
              <li>
                <PeopleOutlined className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
              <li>
                <ProductionQuantityLimitsOutlined className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <CategoryOutlined className="icon" />
              <span>Categories</span>
            </li>
            <li>
              <CreditCardOutlined className="icon" />
              <span>Orders</span>
            </li>

            <li>
              <LocalShippingOutlined className="icon" />
              <span>Delivery</span>
            </li>

            <p className="title">SERVICES</p>
            <li>
              <SettingsOutlined className="icon" />
              <span>Settings</span>
            </li>

            <li>
              <NotificationsNoneOutlined className="icon" />
              <span>Notifcations</span>
            </li>

            <p className="title">USER</p>

            <Link to="/users/123" style={{ textDecoration: "none" }}>
              <li>
                <AccountCircleOutlined className="icon" />
                <span>Profile</span>
              </li>
            </Link>

            <li onClick={logoutHandler}>
              <LogoutOutlined className="icon" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className="sidebar__bottom">
          <div
            className="colorOption"
            onClick={() => {
              dispatch({ type: "LIGHT" })
            }}
          ></div>
          <div
            className="colorOption"
            onClick={() => {
              dispatch({ type: "DARK" })
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

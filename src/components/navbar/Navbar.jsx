import React, { useContext } from "react"
import "./navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
import { DarkModeContext } from "../../context/themeContext.js"
import { LightModeOutlined } from "@mui/icons-material"

function Navbar() {
  const { dispatch, darkMode } = useContext(DarkModeContext)
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              name="search"
              id="search"
            />
            <SearchOutlinedIcon />
          </div>

          <div className="items">
            <div className="item">
              <LanguageOutlinedIcon className="icon" />
              English
            </div>

            <div
              className="item"
              onClick={() => {
                dispatch({ type: "TOGGLE" })
              }}
            >
              {darkMode ? (
                <LightModeOutlined className="icon" />
              ) : (
                <DarkModeOutlinedIcon className="icon" />
              )}
            </div>

            <div className="item">
              <FullscreenExitOutlinedIcon className="icon" />
            </div>

            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">1</div>
            </div>

            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="counter">3</div>
            </div>

            <div className="item">
              <ListOutlinedIcon className="icon" />
            </div>

            <div className="item">
              <img
                src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="user profile avatar"
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

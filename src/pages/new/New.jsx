import React, { useState } from "react"
import { Navbar, Sidebar } from "../../components"
import "./new.scss"
import { DriveFolderUploadOutlined } from "@mui/icons-material"

function New({ inputs, title }) {
  const [file, setFile] = useState("")

  console.log(file)
  return (
    <>
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1 className="title">{title}</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt="empty"
              />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Image:
                    <DriveFolderUploadOutlined className="icon" />
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    accept="image/"
                    onChange={(e) => {
                      setFile(e.target.files[0])
                    }}
                    style={{ display: "none" }}
                  />
                </div>

                {inputs.map((input) => {
                  return (
                    <div className="formInput" key={input.key}>
                      <label htmlFor={input.name}>{input.label}</label>
                      <input
                        type={input.type}
                        name={input.name}
                        id={input.id}
                        placeholder={input.placeholder}
                        autoComplete="false"
                      />
                    </div>
                  )
                })}

                <div className="formButton">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default New

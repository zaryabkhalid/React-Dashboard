import React, { useState } from "react"
import "./login.scss"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [userCradentials, setUserCradentials] = useState({
    email: "",
    password: "",
  })

  function loginHandler(e) {
    setUserCradentials((currUser) => ({
      ...currUser,
      [e.target.name]: e.target.value,
    }))
  }
  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(userCradentials))
    navigate("/dashboard")
  }

  return (
    <>
      <div className="loginContainer">
        <h1 className="title">LOGIN</h1>

        <form onSubmit={handleSubmit}>
          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="admin@testing.com"
              autoComplete="false"
              required
              onChange={loginHandler}
            />
          </div>
          <div className="formInput">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              autoComplete="false"
              required
              onChange={loginHandler}
            />
          </div>
          <div className="formInput">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login

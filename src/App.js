import { Home, List, New, Single, Login } from "./pages"
import { Routes, Route } from "react-router-dom"
import { newUserInputs, newProductInputs } from "./inputSource"
import "./style/dark.scss"
import { DarkModeContext } from "./context/themeContext"
import { useContext } from "react"

function App() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={newUserInputs} title="ADD NEW USER" />}
            />
          </Route>

          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="newproduct"
              element={
                <New inputs={newProductInputs} title="Add NEW PRODUCT" />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App

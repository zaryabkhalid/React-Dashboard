import React, { createContext, useReducer } from "react"
import { darkModeReducer } from "./darkModeReducer"

const INITIA_STATE = {
  darkMode: false,
}

export const DarkModeContext = createContext(INITIA_STATE)

export const DarkmodeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, INITIA_STATE)

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  )
}

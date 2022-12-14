import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      {children}
      <footer className="footer">
        <h5>Copyright 2022 web dominator</h5>
      </footer>
    </div>
  )
}

import React from "react"
import "./layout.css"

import "@fontsource/lexend-deca/400.css"
import "@fontsource/space-mono/700.css"

import Navigation from "../navigation/navigation"

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout

import React from "react"
import "./layout.css"

import "@fontsource/lexend-deca/400.css"
import "@fontsource/space-mono/700.css"

import Navigation from "../navigation/navigation"
import Footer from "../footer/footer"

function Layout({ children }) {
  return (
    <div className="Wrapper">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

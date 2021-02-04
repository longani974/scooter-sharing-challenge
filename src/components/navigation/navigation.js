import React, { useState } from "react"
import Burger from "./burger/burger"
import Logo from "./logo/logo"
import Nav from "./nav/nav"

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <>
      <section className="sectionNav">
        <Burger openHandler={openHandler} open={open}></Burger>
        <Logo openHandler={openHandler} open={open} />{" "}
        <span className="navTablet">
          <Nav openHandler={openHandler} open={open}></Nav>
        </span>
      </section>
      <span className="navMobile">
        <Nav openHandler={openHandler} open={open}></Nav>
      </span>
    </>
  )
}

export default Navigation

import React, { useState } from "react"
import Burger from "./burger/burger"
import Logo from "./logo/logo"
import NavMobile from "./navMobile/navMobile"

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <>
      <header>
        <Burger openHandler={openHandler} open={open}></Burger>
        <Logo></Logo>
      </header>
      <NavMobile openHandler={openHandler} open={open}></NavMobile>
    </>
  )
}

export default Navigation
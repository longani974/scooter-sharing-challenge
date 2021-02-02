import React, { useState } from "react"
import Burger from "./burger/burger"
import Logo from "./logo/logo"

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <header>
      <Burger openHandler={openHandler} open={open}></Burger>
      <Logo></Logo>
    </header>
  )
}

export default Navigation

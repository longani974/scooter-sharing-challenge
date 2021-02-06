import { Link } from "gatsby"
import React from "react"
import LogoImg from "../../../assets/logo.svg"

const Logo = props => {
  const retractNav = () => {
    if (props.open) props.openHandler()
    return
  }
  return (
    // role, onKeyPress and tabIndex are for accacibility warning
    <div
      onClick={retractNav}
      onKeyPress={retractNav}
      className="logoHero"
      role="menuitem"
      tabIndex="0"
    >
      <Link to={"/"}>
        <img src={LogoImg} alt="logo"></img>
      </Link>
    </div>
  )
}

export default Logo

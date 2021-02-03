import { Link } from "gatsby"
import React from "react"
import LogoImg from "../../../assets/logo.svg"

const Logo = props => {
  const retractNav = () => {
    if (props.open) props.openHandler()
    return
  }
  return (
    <div onClick={retractNav} className="logoHero">
      <Link to={"/"}>
        <img src={LogoImg} alt="logo"></img>
      </Link>
    </div>
  )
}

export default Logo

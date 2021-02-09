import React from "react"
import FootNav from "../footNav/footNav"
import SignUp from "../signUp/signUp"
import * as styles from "./footer.module.css"
const Footer = () => {
  return (
    <footer>
      <SignUp />
      <FootNav />
    </footer>
  )
}

export default Footer

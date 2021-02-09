import { Link } from "gatsby"
import React from "react"
import Image from "../image/image"
import LogoImg from "../../assets/logoWhite.svg"
import * as styles from "./footNav.module.css"

const FootNav = () => {
  return (
    <div className={styles.footNav}>
      <div className={styles.logo}>
        <Link to={"/"}>
          <img fill="white" src={LogoImg} alt="logo"></img>
        </Link>
      </div>
      <div className={styles.nav}>
        <Link to={"/about/"}>About</Link>
        <Link to={"/location/"}>Location</Link>
        <Link to={"/careers/"}>Careers</Link>
      </div>
      <div className={styles.icons}>
        <a href="https://www.facebook.com">
          <Image src="icons/facebook.svg" alt="" />
        </a>
        <a href="https://www.twitter.com">
          <Image src="icons/twitter.svg" alt="" />
        </a>
        <a href="https://www.instagram.com">
          <Image src="icons/instagram.svg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default FootNav

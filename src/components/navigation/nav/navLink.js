import { Link } from "gatsby"
import React from "react"

import * as styles from "./navLink.module.css"

const NavLink = () => {
  return (
    <nav className={styles.nav}>
      <Link to={"/about/"}>About</Link>
      <Link to={"/location/"}>Location</Link>
      <Link to={"/careers/"}>Careers</Link>
    </nav>
  )
}

export default NavLink

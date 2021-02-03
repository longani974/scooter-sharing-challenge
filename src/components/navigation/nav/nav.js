import React from "react"
import Button from "../../ui/button"
import NavLink from "./navLink"

import * as styles from "./navMobile.module.css"

const Nav = props => {
  let right = 100
  if (props.open) {
    right = 0
  }
  return (
    <div
      onClick={props.openHandler}
      className={styles.nav}
      style={{ right: `${right}vw` }}
    >
      <div className={styles.navWrapper}>
        <NavLink></NavLink>
        <Button to={"#"}>Get Scootin</Button>
      </div>
    </div>
  )
}

export default Nav

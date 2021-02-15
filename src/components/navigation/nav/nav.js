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
    // aria hiden for es lint warning (accecibilty with keybord but it's a function for mobile)
    <div
      onClick={props.openHandler}
      className={styles.nav}
      style={{ right: `${right}vw` }}
      aria-hidden="true"
    >
      <div className={styles.navWrapper}>
        <NavLink></NavLink>
        <Button to={"#signUp"}>Get Scootin</Button>
      </div>
    </div>
  )
}

export default Nav

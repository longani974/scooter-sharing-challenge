import React from "react"

import * as styles from "./navMobile.module.css"

const NavMobile = props => {
  let right = 100
  if (props.open) {
    right = 0
  }
  return (
    <div
      onClick={props.openHandler}
      className={styles.navMobile}
      style={{ right: `${right}vw` }}
    ></div>
  )
}

export default NavMobile

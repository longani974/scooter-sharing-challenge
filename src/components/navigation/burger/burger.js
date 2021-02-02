import React from "react"

import * as styles from "./burger.module.css"

const Burger = props => {
  let topOpen
  let middleOpen
  let bottomOpen
  if (props.open) {
    topOpen = styles.topOpen
    middleOpen = styles.middleOpen
    bottomOpen = styles.bottomOpen
  }

  return (
    <div onClick={props.openHandler} className={`burger ${styles.burger}`}>
      <div className={styles.wrapper}>
        <div className={styles.top + " " + topOpen}></div>
        <div className={styles.middle + " " + middleOpen}></div>
        <div className={styles.bottom + " " + bottomOpen}></div>
      </div>
    </div>
  )
}

export default Burger

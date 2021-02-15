import { Link } from "gatsby"
import React from "react"

import * as styles from "./button.module.css"

function Button(props) {
  const width = props.large ? "247px" : "180px"

  const BUTTON = !props.to ? (
    <button
      onClick={props.action}
      className={styles.btn}
      style={{ "--btnWidth": `${width}` }}
    >
      {props.children}
    </button>
  ) : (
    <Link to={props.to ? props.to : "#"}>
      <button
        onClick={props.action}
        className={styles.btn}
        style={{ "--btnWidth": `${width}` }}
      >
        {props.children}
      </button>
    </Link>
  )
  return <>{BUTTON}</>
}

export default Button

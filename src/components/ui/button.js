import { Link } from "gatsby"
import React from "react"

import * as styles from "./button.module.css"

function Button(props) {
  return (
    <Link to={props.to ? props.to : null}>
      <button onClick={props.action} className={styles.btn}>
        {props.children}
      </button>
    </Link>
  )
}

export default Button

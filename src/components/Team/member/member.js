import React from "react"
import Button from "../../ui/button"

import * as styles from "./member.module.css"

const Member = props => {
  return (
    <div className={styles.member}>
      <h4>{props.job}</h4>
      <p>{props.location}</p>
      <Button large>Apply</Button>
    </div>
  )
}

export default Member

import React from "react"
import Askres from "./askresp"

import * as styles from "./accordon.module.css"

const Accordion = props => {
  const data = props.data.askRsp
  console.log(data)
  const content = []
  for (let i = 0; i < data.length; i++) {
    content.push(
      <Askres
        ask={data[i].ask}
        response={data[i].response}
        key={Math.random()}
      />
    )
  }
  return (
    <div className={styles.accordion}>
      <h3>{props.data.title}</h3>
      {content.map(data => data)}
    </div>
  )
}

export default Accordion

import React from "react"
import Image from "../image/image"
import Button from "../ui/button"

import * as styles from "./card.module.css"

const Card = props => {
  return (
    <div className={styles.card}>
      <div>
        <Image src={props.srcImg} />
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <Button>{props.btnTxt}</Button>
      </div>
    </div>
  )
}

export default Card

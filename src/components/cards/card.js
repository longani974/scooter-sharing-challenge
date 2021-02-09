import React from "react"
import Image from "../image/image"
import Button from "../ui/button"

import * as styles from "./card.module.css"

const Card = props => {
  let arrow

  const arrowHandler = (tagStyle, imgSrc) => {
    return (
      <div className={styles.arrow + " " + tagStyle}>
        <Image src={imgSrc} alt="" />
      </div>
    )
  }

  switch (props.arrow) {
    case "a":
      arrow = arrowHandler(styles.a, "patterns/left-downward-arrow.svg")
      break
    case "b":
      arrow = arrowHandler(styles.b, "patterns/left-upward-arrow.svg")
      break
    case "c":
      arrow = arrowHandler(styles.c, "patterns/left-downward-arrow.svg")
      break
    case "d":
      arrow = arrowHandler(styles.d, "patterns/right-arrow.svg")
      break
    case "e":
      arrow = arrowHandler(styles.e, "patterns/right-arrow.svg")
      break
    case "f":
      arrow = arrowHandler(styles.f, "patterns/left-downward-arrow.svg")
      break
    default:
      console.error(`wrong position of the arrow on ${props.imgSrc}`)
      break
  }
  return (
    <div className={styles.card}>
      <div className={styles.imgWrapper}>
        {arrow}
        <Image src={props.srcImg} className={styles.img} />
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

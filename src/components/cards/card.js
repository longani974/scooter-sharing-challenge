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

  const bgCircle = !props.reverse
    ? styles.bgCircleReverse
    : styles.bgCircleNormal

  const rowSide = !props.reverse ? "row" : "row-reverse"

  const btn = props.btnTxt ? (
    <Button to={props.to}>{props.btnTxt}</Button>
  ) : (
    <></>
  )
  return (
    <div style={{ "--rowSide": `${rowSide}` }} className={styles.card}>
      <div className={bgCircle}></div>
      <div className={styles.imgWrapper}>
        {arrow}
        <div>
          <Image src={props.srcImg} className={styles.img} />
        </div>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        {btn}
      </div>
    </div>
  )
}

export default Card

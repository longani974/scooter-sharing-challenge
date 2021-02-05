import React from "react"

import arrowImg from "../../assets/patterns/right-arrow.svg"
import whiteCirclesImg from "../../assets/patterns/white-circles.svg"

import * as styles from "./header.module.css"
import Image from "../image/image"

const Header = props => {
  let spacingAround = styles.noContent
  let arrowToDisplay = <></>

  if (props.isWithContent) {
    spacingAround = styles.withContent
    arrowToDisplay = <img className={styles.arrow} src={arrowImg} alt="" />
  }
  return (
    <Image
      isBgImage
      className={"backImg"}
      src={props.imgSrc}
      alt="Sunset Image"
    >
      <header className={styles.header + " " + spacingAround}>
        <h1>{props.title}</h1>
        <div>{props.content}</div>
        {arrowToDisplay}
        <img className={styles.whiteCirlces} src={whiteCirclesImg} alt="" />
      </header>
    </Image>
  )
}

export default Header

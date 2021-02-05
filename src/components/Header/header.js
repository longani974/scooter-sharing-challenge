import React from "react"

import arrowImg from "../../assets/patterns/right-arrow.svg"
import whiteCirclesImg from "../../assets/patterns/white-circles.svg"
import line from "../../assets/patterns/line.svg"

import * as styles from "./header.module.css"
import Image from "../image/image"

const Header = props => {
  let spacingAround = styles.noContent
  let arrowToDisplay = <></>
  let lineToDisplay = <></>

  if (props.isWithContent) {
    spacingAround = styles.withContent
    arrowToDisplay = <img className={styles.arrow} src={arrowImg} alt="" />
    lineToDisplay = <img className={styles.line} src={line} alt="" />
  }
  return (
    <Image
      isBgImage
      className={"backImg"}
      src={props.imgSrc}
      alt="Sunset Image"
    >
      <header className={styles.header + " " + spacingAround}>
        <div>
          <h1>{props.title}</h1>
          <div>{props.content}</div>
          {arrowToDisplay}
          <img className={styles.whiteCirlces} src={whiteCirclesImg} alt="" />
          {lineToDisplay}
        </div>
      </header>
    </Image>
  )
}

export default Header

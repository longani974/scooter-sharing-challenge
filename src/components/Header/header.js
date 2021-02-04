import React from "react"

import arrowImg from "../../assets/patterns/right-arrow.svg"

import * as styles from "./header.module.css"
import Image from "../image/image"

const Header = props => {
  let spacingAround = { "--spacingAround": "60px 32px" }
  let arrowToDisplay = <></>
  if (props.isWithContent) {
    spacingAround = { "--spacingAround": "115px 32px 178px" }
    arrowToDisplay = <img className={styles.arrow} src={arrowImg} alt="" />
  }
  return (
    <Image
      isBgImage
      className={"backImg"}
      src={props.imgSrc}
      alt="Sunset Image"
    >
      <header className={styles.header} style={spacingAround}>
        <h1>{props.title}</h1>
        <div>{props.content}</div>
        {arrowToDisplay}
      </header>
    </Image>
  )
}

export default Header

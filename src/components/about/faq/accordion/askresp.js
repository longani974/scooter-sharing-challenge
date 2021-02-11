import React, { useEffect, useRef, useState } from "react"
import * as styles from "./askRes.module.css"

import arrowDown from "../../../../assets/icons/chevron.svg"

const Askres = props => {
  const [isClicked, setIsClicked] = useState(false)
  const [resStyle, setResStyle] = useState({
    // visibility: "hidden",
    height: "0",
  })
  const [rotateArrow, setRotateArrow] = useState({
    transform: "rotate(0deg)",
  })
  const [spacingBetween, setSpacingBetween] = useState({
    marginBottom: "0px",
  })

  const inner = useRef()

  useEffect(() => {
    // console.log(inner.current.scrollHeight);
    if (isClicked) {
      setResStyle({ height: inner.current.scrollHeight + "px" })
      setRotateArrow({ transform: "rotate(180deg)" })
      setSpacingBetween({ marginBottom: "12px" })
    } else {
      setResStyle({ height: "0" })
      setRotateArrow({ transform: "rotate(0deg)" })
      setSpacingBetween({ marginBottom: "0px" })
    }
  }, [isClicked])

  const clickHandler = () => {
    setIsClicked(prevState => !prevState)
  }

  return (
    <div
      className={styles.askResponse}
      onClick={clickHandler}
      aria-hidden="true"
    >
      <div className={styles.askWrapper} style={spacingBetween}>
        <div className={styles.ask}>{props.ask}</div>
        <div
          className={styles.askBtn}
          style={rotateArrow}
          // onClick={clickHandler}
          // onKeyDown={clickHandler}
          // role="main"
          // tabIndex="0"
        >
          <img src={arrowDown} alt="^" />
        </div>
      </div>
      <div style={resStyle} className={styles.response} ref={inner}>
        <p>{props.response}</p>
      </div>
    </div>
  )
}

export default Askres

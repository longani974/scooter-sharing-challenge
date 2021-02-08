import React, { useEffect, useState } from "react"
import Image from "../../image/image"

import * as styles from "./info.module.css"

const Info = props => {
  const [image, setImage] = useState(<></>)
  useEffect(() => {
    setImage(<Image src={`icons/${props.logo}`} alt="" />)
  }, [props.logo])
  return (
    <div className={styles.info}>
      <div>{image}</div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Info

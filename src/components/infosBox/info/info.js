import React, { useEffect, useState } from "react"
import Image from "../../image/image"

import * as styles from "./info.module.css"

const Info = props => {
  const [image, setImage] = useState(<></>)
  useEffect(() => {
    if (props.logo) {
      setImage(<Image src={`icons/${props.logo}`} alt="" />)
    } else return
  }, [props.logo])

  const imgHero = props.imgHero ? (
    <Image src={`images/${props.imgHero}`} alt="" className={styles.imgHero} />
  ) : (
    <></>
  )

  const logo = props.nbContent ? `0${props.nbContent}` : image
  return (
    <div className={styles.info}>
      {imgHero}
      <div className={styles.logo}>{logo}</div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Info

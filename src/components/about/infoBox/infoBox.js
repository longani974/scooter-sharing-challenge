import React from "react"
import Info from "../../infosBox/info/info"
import data from "./info.json"
import * as styles from "./infoBox.module.css"

const InfosBox = () => {
  const infos = []
  for (let i = 0; i < data.length; i++) {
    infos.push(
      <Info
        title={data[i].title}
        content={data[i].content}
        nbContent={i + 1}
        imgHero={data[i].imgHero}
        key={i}
      />
    )
  }
  return (
    <div className={styles.infoBox}>
      <div className={styles.line}></div>
      {infos.map(info => info)}
    </div>
  )
}

export default InfosBox

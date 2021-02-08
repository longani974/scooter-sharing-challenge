import React from "react"
import Info from "./info/info"
import data from "./info.json"
import * as styles from "./infosBox.module.css"

const InfosBox = () => {
  const infos = []
  for (let i = 0; i < data.length; i++) {
    infos.push(
      <Info
        logo={data[i].logo}
        title={data[i].title}
        content={data[i].content}
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

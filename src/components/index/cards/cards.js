import React from "react"
import Card from "../../cards/card"
import data from "./data.json"
import * as styles from "./cards.module.css"

const Cards = () => {
  const datas = []
  for (let i = 0; i < data.length; i++) {
    const rev = i % 2 ? false : true
    datas.push(
      <Card
        srcImg={data[i].imgSrc}
        title={data[i].title}
        content={data[i].content}
        btnTxt={data[i].btnTxt}
        reverse={rev}
        arrow={data[i].arrow}
        key={Math.random()}
      />
    )
  }
  return <div className={styles.cards}>{datas.map(data => data)}</div>
}

export default Cards

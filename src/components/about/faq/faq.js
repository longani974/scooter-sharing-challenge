import React from "react"
import Accordion from "./accordion/accordion"

import * as styles from "./faq.module.css"

import howItWork from "./datas/howItWorks.json"
import safeDriving from "./datas/safeDriving.json"

const Faq = () => {
  return (
    <div className={styles.faq}>
      <h2>FAQs</h2>
      <Accordion data={howItWork} />
      <div className={styles.space}></div>
      <Accordion data={safeDriving} />
    </div>
  )
}

export default Faq

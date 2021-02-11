import React from "react"
import Member from "./member/member"

import * as styles from "./team.module.css"

const Team = () => {
  return (
    <div className={styles.team}>
      <Member job="General Manager" location="Jakarta, Indonesia" />
      <Member job="UI/UX Designer" location="Yokohama, Japan" />
      <Member
        job="Blog Content Copywriter"
        location="New York, United States"
      />
      <Member job="Graphic Designer" location="New York, United States" />
      <Member job="Fleet Supervisor" location="Jakarta, Indonesia" />
      <Member job="UX Analyst" location="London, United Kingdom" />
    </div>
  )
}

export default Team

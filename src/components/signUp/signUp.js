import { Link } from "gatsby"
import React from "react"
import Image from "../image/image"
import * as styles from "./signUp.module.css"

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <h2>Sign up and Scoot off today</h2>
      <div className={styles.store}>
        <Link to="#">
          <Image
            src="icons/app-store.svg"
            alt="app store"
            className={styles.icon}
          />
        </Link>
        <Link to="#">
          <Image
            src="icons/google-play.svg"
            alt="google play"
            className={styles.icon}
          />
        </Link>
      </div>
      <div className={styles.bgCircles}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default SignUp

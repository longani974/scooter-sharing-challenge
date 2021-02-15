import React from "react"
import Image from "../image/image"
import * as styles from "./signUp.module.css"

const SignUp = () => {
  return (
    <div className={styles.signUp} id="signUp">
      <h2>Sign up and Scoot off today</h2>
      <div className={styles.store}>
        <a href="https://www.apple.com/">
          <Image
            src="icons/app-store.svg"
            alt="app store"
            className={styles.icon}
          />
        </a>
        <a href="https://play.google.com/">
          <Image
            src="icons/google-play.svg"
            alt="google play"
            className={styles.icon}
          />
        </a>
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

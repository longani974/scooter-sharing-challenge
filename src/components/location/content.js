import React from "react"
import Image from "../image/image"
import Button from "../ui/button"
import * as styles from "./content.module.css"

const Content = () => {
  return (
    <div className={styles.location}>
      <Image
        src={{
          mobile: "images/world-map-mobile.png",
          tablet: "images/map-desktop.png",
          dasktop: "images/map-tablet.png",
        }}
      />
      <div className={styles.towns}>
        <span>New York</span>
        <span>London</span>
        <span>Jakarta</span>
        <span>Yokohama</span>
      </div>
      <div className={styles.card}>
        <h2>Your City Not Listed?</h2>
        <p>
          If you’d like to see Scoot in your hometown, be sure to let us know.
          We track requests and plan launches based on demand. Feel free to
          message us by clicking the link or messaging us on social.
        </p>
        <Button>Message Us</Button>
      </div>
    </div>
  )
}

export default Content

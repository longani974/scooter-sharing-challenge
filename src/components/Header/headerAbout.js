import React from "react"
import Button from "../ui/button"

import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import * as styles from "./header.module.css"

const HeaderAbout = props => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "images/about-hero-mobile.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.image.childImageSharp.fluid

  return (
    <BackgroundImage Tag="section" className={"backImg"} fluid={imageData}>
      <header
        className={styles.header}
        style={{ "--spacingAround": "60px 32px" }}
      >
        <h1>{props.title}</h1>
      </header>
    </BackgroundImage>
  )
}

export default HeaderAbout

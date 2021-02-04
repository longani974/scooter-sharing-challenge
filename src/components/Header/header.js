import React from "react"
import Button from "../ui/button"

import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

import * as styles from "./header.module.css"

const Header = props => {
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

  let content
  if (props.withContent) {
    content = (
      <>
        <h1>{props.title}</h1>
        <div>{props.content}</div>
      </>
    )
  } else {
    content = <h1>{props.title}</h1>
  }
  return (
    <BackgroundImage Tag="section" className={styles.backImg} fluid={imageData}>
      <header className={styles.header} style={{ "--spacingAround": "60px 0" }}>
        {content}
      </header>
    </BackgroundImage>
  )
}

export default Header

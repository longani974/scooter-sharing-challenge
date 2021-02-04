import React from "react"
import Button from "../ui/button"

import BackgroundImage from "gatsby-background-image"

import arrowImg from "../../assets/patterns/right-arrow.svg"

import { graphql, useStaticQuery } from "gatsby"

import * as styles from "./header.module.css"

const HeaderHome = props => {
  const data = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "images/home-hero-mobile.jpg" }) {
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
        style={{ "--spacingAround": "115px 32px 178px" }}
      >
        <h1>{props.title}</h1>
        <div>{props.content}</div>
        <img className={styles.arrow} src={arrowImg} alt="" />
      </header>
    </BackgroundImage>
  )
}

export default HeaderHome

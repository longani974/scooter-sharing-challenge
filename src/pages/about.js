import React from "react"
import Cards from "../components/about/cards/cards"
import Header from "../components/Header/header"

function About() {
  const title = "About"
  return (
    <>
      <Header
        imgSrc={{
          mobile: "images/about-hero-mobile.jpg",
          tablet: "images/about-hero-tablet.jpg",
          desktop: "images/about-hero-desktop.jpg",
        }}
        title={title}
      />
      <Cards />
    </>
  )
}

export default About

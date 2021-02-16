import React from "react"
import { Helmet } from "react-helmet"
import Cards from "../components/about/cards/cards"
import Faq from "../components/about/faq/faq"
import InfosBox from "../components/about/infoBox/infoBox"
import Header from "../components/Header/header"

function About() {
  const title = "About"
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>My homepage</title>
        <meta name="description" content="Here you will learn more about us" />
      </Helmet>
      <Header
        imgSrc={{
          mobile: "images/about-hero-mobile.jpg",
          tablet: "images/about-hero-tablet.jpg",
          desktop: "images/about-hero-desktop.jpg",
        }}
        title={title}
      />
      <Cards />
      <InfosBox title="Our values" />
      <Faq />
    </>
  )
}

export default About

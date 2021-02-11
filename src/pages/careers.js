import React from "react"
import InfosBox from "../components/about/infoBox/infoBox"
import Cards from "../components/careers/cards/cards"
import Header from "../components/Header/header"
import Team from "../components/Team/team"

function Careers() {
  const title = "Careers"
  return (
    <>
      <Header
        imgSrc={{
          mobile: "images/careers-location-hero-mobile.jpg",
          tablet: "images/careers-locations-hero-tablet.jpg",
          desktop: "images/careers-locations-hero-desktop.jpg",
        }}
        title={title}
      />
      <Cards />
      <InfosBox title="Why join us?" />
      <Team />
    </>
  )
}

export default Careers

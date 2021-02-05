import React from "react"
import Header from "../components/Header/header"

function Location() {
  const title = "Location"
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
    </>
  )
}

export default Location

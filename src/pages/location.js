import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/Header/header"
import Content from "../components/location/content"

function Location() {
  const title = "Location"
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Location</title>
        <meta
          name="description"
          content="The cities were you can rent a bike with scoot app"
        />
      </Helmet>
      <Header
        imgSrc={{
          mobile: "images/careers-location-hero-mobile.jpg",
          tablet: "images/careers-locations-hero-tablet.jpg",
          desktop: "images/careers-locations-hero-desktop.jpg",
        }}
        title={title}
      />
      <Content />
    </>
  )
}

export default Location

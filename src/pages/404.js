import React from "react"
import Header from "../components/Header/header"

const PageNotFound = () => {
  const title = "404"
  return (
    <>
      <Header
        imgSrc={{
          mobile: "images/careers-location-hero-mobile.jpg",
          tablet: "images/careers-locations-hero-tablet.jpg",
          desktop: "images/careers-locations-hero-desktop.jpg",
        }}
        title={title}
      ></Header>
      <h1>ouppssss</h1>
    </>
  )
}

export default PageNotFound

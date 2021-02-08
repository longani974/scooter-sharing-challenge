import React from "react"
import HeaderHome from "../components/Header/header"
import Cards from "../components/index/cards/cards"
import InfosBox from "../components/infosBox/infosBox"
import Button from "../components/ui/button"

export default function Home() {
  const title = "Scooter sharing made simple"
  const content = (
    <>
      <p>
        Scoot takes the hassle out of urban mobility. Our bikes are placed in
        convenient locations in each of our cities. Use our app to locate the
        nearest bike, unlock it with a tap, and you’re away!
      </p>
      <Button>Get Scooting</Button>
    </>
  )
  return (
    <>
      <HeaderHome
        imgSrc={{
          mobile: "images/home-hero-mobile.jpg",
          tablet: "images/home-hero-tablet.jpg",
          dasktop: "images/home-hero-desktop.jpg",
        }}
        isWithContent
        title={title}
        content={content}
      />
      <InfosBox />
      <Cards />
    </>
  )
}

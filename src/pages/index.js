import React from "react"
import HeaderHome from "../components/Header/header"
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
        imgSrc="images/home-hero-mobile.jpg"
        withContent
        title={title}
        content={content}
      />
    </>
  )
}

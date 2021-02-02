import React from "react"
import Layout from "../components/layout/layout"
import Button from "../components/ui/button"

export default function Home() {
  return (
    <Layout>
      <h1>Parksa</h1>
      <div>Hello world!</div>
      <Button action={() => console.log("boom")}>Button</Button>
    </Layout>
  )
}

import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import MyJourney from "../components/MyJourney"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <MyJourney />
  </Layout>
)

export default IndexPage

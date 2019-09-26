import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header />
        <h1>Blog</h1>
        <h2>Short updates in life and tech</h2>
      </Layout>
    )
  }
}

export default Home

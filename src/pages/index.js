import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>Blog</h1>
        <h2>Short updates in life and tech</h2>
      </Layout>
    )
  }
}

export default Home

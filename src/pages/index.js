import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
export default function Home({ data }) {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Devlop</h3>
          <p>And Deploy your idea with me</p>
          <Link to="/projects" className={styles.btn}>
            My Projects
          </Link>
        </div>
        {/* <img src="/banner.png" alt="banner " style={{ maxWidth: "100%" }} /> */}
        <GatsbyImage image={getImage(data.file.childImageSharp)} alt="" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
`

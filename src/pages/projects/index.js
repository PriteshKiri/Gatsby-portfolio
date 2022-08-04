import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  console.log(data)
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact
  return (
    <Layout>
      <div className={styles.portfolio}>
        <h1>Portfolio</h1>
        <h2>Projects and websites I have created</h2>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div className={styles.imagediv} >
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb.childImageSharp)}
                  alt=""
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see ? Email me at {contact}</p>
      </div>
    </Layout>
  )
}

//export project query
export const query = graphql`
  query MyQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`

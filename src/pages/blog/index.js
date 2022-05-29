import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"

const Blog = ({ data }) => {
  return(
    <Layout>
      <h1>Blog</h1>
      {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
            </h2>
            <small>{node.frontmatter.date}</small>
          </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        id
        slug
      }
    }
  }
`

export default Blog
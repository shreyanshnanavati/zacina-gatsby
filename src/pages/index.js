import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const IndexPage = ({data}) => (
  <Layout>
            <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
  </Layout>
)

export const query = graphql `
  query {
    allMarkdownRemark{
      edges{
        node{
          html
        }
      }
    }
  }
`

export default IndexPage

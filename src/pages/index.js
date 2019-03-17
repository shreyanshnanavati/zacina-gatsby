import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';


export const IndexPage = ({data}) => (
  <Layout>
    <div className="row">
    {data.allMarkdownRemark.edges.map(function(edge){
      return <div  className="col-sm-6">
              <div key = {edge.node.frontmatter.date} className="card">
                      <div className="card-body">
                        <h5 className="card-title">{edge.node.frontmatter.title}</h5>
                      </div>
                  </div>
            </div>
    })}
    </div>
    

      
  </Layout>
)

export const query = graphql `
query{
  allMarkdownRemark{
    edges{
      node{
        frontmatter{
          title,
          date
        }
      }
    }
  }
}
`

export default IndexPage

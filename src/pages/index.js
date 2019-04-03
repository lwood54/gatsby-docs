import React from "react"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"

// export default () => (
//       <StaticQuery
//             query={titleQuery}
//             render={data => {
//                   return (
//                         <Layout>
//                               <h1>
//                                     Spectacular {data.site.siteMetadata.title}
//                               </h1>
//                               <div>
//                                     <img
//                                           src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
//                                           alt="Group of pandas eating bamboo"
//                                     />
//                               </div>
//                         </Layout>
//                   )
//             }}
//       />
// )
export default () => {
      return (
            <StaticQuery query={titleQuery}>
                  {data => {
                        // This is an alternate to doing:
                        // <StaticQuery query={} render={() => {}} />
                        return (
                              <Layout>
                                    <h1>
                                          Spectacular{" "}
                                          {data.site.siteMetadata.title}
                                    </h1>
                                    <div>
                                          <img
                                                src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
                                                alt="Group of pandas eating bamboo"
                                          />
                                    </div>
                              </Layout>
                        )
                  }}
            </StaticQuery>
      )
}
const titleQuery = graphql`
      query {
            site {
                  siteMetadata {
                        title
                  }
            }
      }
`

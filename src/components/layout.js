import React from "react"
import { css } from "@emotion/core"
import { Link, graphql, StaticQuery } from "gatsby"

import { rhythm } from "../utils/typography"

export default props => {
      console.log("layout.js: props - ", props)
      return (
            <StaticQuery
                  query={titleQuery}
                  render={data => (
                        <div
                              css={css`
                                    margin: 0 auto;
                                    max-width: 700px;
                                    padding: ${rhythm(2)};
                                    padding-top: ${rhythm(1.5)};
                              `}
                        >
                              <Link to={`/`}>
                                    <h3
                                          css={css`
                                                margin-bottom: ${rhythm(2)};
                                                display: inline-block;
                                                font-style: normal;
                                          `}
                                    >
                                          {data.site.siteMetadata.title}
                                    </h3>
                              </Link>
                              <Link
                                    to={`/about/`}
                                    css={css`
                                          float: right;
                                    `}
                              >
                                    About
                              </Link>
                              {props.children}
                        </div>
                  )}
            />
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

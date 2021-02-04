import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import React, { useMemo } from "react"

const Image = ({ isBgImage, children, src, ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(
    () =>
      data.images.edges.find(({ node }) => {
        return src === node.relativePath
      }),
    [data, src]
  )

  if (!match) return null

  const { node: { childImageSharp, publicURL, extension } = {} } = match

  if (extension === "svg" || !childImageSharp) {
    return <img src={publicURL} {...rest} />
  }

  let imageToDisplay

  isBgImage
    ? (imageToDisplay = (
        <BackgroundImage fluid={childImageSharp.fluid} {...rest}>
          {children}
        </BackgroundImage>
      ))
    : (imageToDisplay = <Img fluid={childImageSharp.fluid} {...rest} />)

  return imageToDisplay
}

export default Image

import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import React from "react"

const Image = ({ isBgImage, children, src, customMedias, unit, ...rest }) => {
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
  // ?????????????????????????????????????????????????
  // ???                                           ???
  // ???   Do I need useMemo for match and source  ???
  // ???                                           ???
  // ?????????????????????????????????????????????????
  let srcData
  if (Object.prototype.toString.call(src) === "[object Object]") {
    srcData = src
  } else srcData = { src }

  const srcArr = []
  const match = () => {
    Object.entries(srcData).forEach((value, key) => {
      data.images.edges.find(({ node }) => {
        if (value[1] === node.relativePath) {
          srcArr.push([node])
        }
      })
      if (!srcArr[key]) {
        srcArr.push(null)
        console.error(`Image not found at ${value[1]}`)
      }
    })
  }
  match()

  let sourceArr = []
  const source = () => {
    const arrSource = []
    const medias = customMedias ? customMedias : [0, 400, 768]
    const unitMedia = unit ? unit : "px"
    if (customMedias && customMedias.length !== srcArr.length)
      console.error(
        `Problem with number of customs medias and the number of images.}`
      )
    for (let i = 0; i < srcArr.length; i++) {
      if (srcArr[i])
        arrSource.push({
          ...srcArr[i][0].childImageSharp.fluid,
          media: `(min-width: ${medias[i]}${unitMedia})`,
        })
    }
    return (sourceArr = [...arrSource])
  }
  source()

  let imageToDisplay

  isBgImage
    ? (imageToDisplay = (
        <BackgroundImage fluid={sourceArr} {...rest}>
          {children}
        </BackgroundImage>
      ))
    : (imageToDisplay = <Img fluid={sourceArr} {...rest} />)

  return imageToDisplay
}

export default Image

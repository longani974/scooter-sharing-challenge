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

  let isSvg = false
  const srcArr = []
  const match = () => {
    Object.entries(srcData).forEach((value, key) => {
      data.images.edges.forEach(({ node }) => {
        if (value[1] === node.relativePath) {
          srcArr.push([node])
        }
      })
      if (!srcArr[key]) {
        console.error(`Image not found at ${value[1]}`)
        srcArr.push(null)
      }
    })
  }
  match()
  let sourceArr = []
  const source = () => {
    const arrSource = []
    const medias = customMedias ? customMedias : [0, 376, 769]
    const unitMedia = unit ? unit : "px"
    if (customMedias && customMedias.length !== srcArr.length)
      console.error(
        `Problem with number of customs medias and the number of images.}`
      )
    for (let i = 0; i < srcArr.length; i++) {
      if (srcArr[i]) {
        if (srcArr[i][0].extension === "svg") {
          isSvg = true
          arrSource.push(<img src={srcArr[i][0].publicURL} {...rest} alt="" />)
        } else {
          console.log(medias[i])
          if (i === 0) {
            arrSource.push({
              ...srcArr[i][0].childImageSharp.fluid,
              // We are not pushing the media here as this causes a bug where the images do not change when resizing: https://github.com/gatsbyjs/gatsby/issues/16888 kimbaudi solution
            })
          } else {
            arrSource.push({
              ...srcArr[i][0].childImageSharp.fluid,
              media: `(min-width: ${medias[i]}${unitMedia})`, // We start push media on the second image
            })
          }
        }
      }
    }
    return (sourceArr = [...arrSource])
  }
  source()

  let imageToDisplay = <></>
  if (!isSvg && sourceArr[0]) {
    isBgImage
      ? (imageToDisplay = (
          <BackgroundImage fluid={sourceArr} {...rest}>
            {children}
          </BackgroundImage>
        ))
      : (imageToDisplay = <Img fluid={sourceArr} {...rest} />)
  } else if (sourceArr[0]) {
    imageToDisplay = sourceArr[0]
  }
  console.log(imageToDisplay)
  return imageToDisplay
}

export default Image
